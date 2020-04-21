
var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
getUserRepos();

    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
 
var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);

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


    