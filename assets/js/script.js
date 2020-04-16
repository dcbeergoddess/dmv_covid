
// Test Link for getting current covid data for DC only 

var queryURL = "https://covidtracking.com/api/states?state=DC"

//call data to console log to test

$.ajax ({
  url: queryURL,
  method: "GET"
})
  .then(function(response){
    console.log(queryURL);
    console.log(response);
  })