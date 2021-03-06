var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");
var response = fetch("https://api.github.com/users/octocat/repos");
//console.log(response);

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
    // make a request to the url   
    
     fetch(apiUrl)
    .then(function(response) {
        // request was successful
        if (response.ok) {
        response.json().then(function(data) {
            displayRepos(data, user);
        });
        } else {
        alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        alert("Unable to connect to GitHub");
    });
};
    
//     fetch(apiUrl).then(function(response) {
//         if (response.ok) {
//           response.json().then(function(data) {
//             displayRepos(data, user);
//           });
//         } else {
//           alert("Error: " + response.statusText); //add error handling for no user account or 404
//         }
//       });
//   };

   // fetch(apiUrl).then(function(response) {
    //     response.json().then(function(data) {
    //         displayRepos(data, user);
    //       });
    //         //   response.json().then(function(data) {
    //         //     console.log(data);
    //         //   });
    // });


  //getUserRepos();
 


var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};

  userFormEl.addEventListener("submit", formSubmitHandler);

  var displayRepos = function(repos, searchTerm) {
    // clear old content
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;
    console.log(repos);
    console.log(searchTerm);
    //check for an empty array and let the user know if there's nothing to display.
    if (repos.length === 0) {
        repoContainerEl.textContent = "No repositories found.";
        return;
    }
    // loop over repos
    for (var i = 0; i < repos.length; i++) {
        // format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;
    
        // create a container for each repo
        var repoEl = document.createElement("div");
        repoEl.classList = "list-item flex-row justify-space-between align-center";
    
        // create a span element to hold repository name
        var titleEl = document.createElement("span");
        titleEl.textContent = repoName;

        // create a status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";

        // check if current repo has issues or not
        if (repos[i].open_issues_count > 0) {
            statusEl.innerHTML =
            "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
        } else {
            statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }

        // append to container
        repoEl.appendChild(statusEl);
    
        // append to container
        repoEl.appendChild(titleEl);
    
        // append container to the dom
        repoContainerEl.appendChild(repoEl);
    }

  };

















// var getUserRepos = function() {
//     console.log("function was called");
//   };
  
  
//    var getUserRepos = function() {
//     fetch("https://api.github.com/users/octocat/repos");
//    };
//     getUserRepos();

//     var response = fetch("https://api.github.com/users/octocat/repos");
//     console.log(response);

//     // fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//     //     console.log("inside", response);
//     // });      
//     // console.log("outside");

//     fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//         response.json().then(function(data) {
//         console.log(data);
//         });
//     });


