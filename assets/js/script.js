
// querySTATE 
var queryDC = "https://covidtracking.com/api/states?state=DC"
var queryMD = "https://covidtracking.com/api/states?state=MD"
var queryVA = "https://covidtracking.com/api/states?state=VA"



// AJAX CALL TO GET DC INFO
$.ajax ({
  url: queryDC,
  method: "GET"
}) 
.then(function(response){
  console.log(response);
  console.log(response.positive);
  console.log(response.death);
  console.log(response.recovered);

  var dcPositive = response.positive;
  var dcDeaths = response.death;
  var dcRecovered = response.recovered;

  $("#DC-cases").text("Cases: " + response.positive);
  $("#DC-deaths").text("Deaths: " + response.death);
  $("#DC-recovered").text("Recovered: " + response.recovered);


});


// AJAX CALL TO GET MD INFO
$.ajax ({
  url: queryMD,
  method: "GET"
}) 
.then(function(response){
  console.log(response);
  var mdPositive = response.positive;
  var mdDeaths = response.death;
  var mdRecovered = response.recovered;

  $("#MD-cases").text("Cases: " + response.positive);
  $("#MD-deaths").text("Deaths: " + response.death);
  $("#MD-recovered").text("Recovered: " + response.recovered);

});

// AJAX CALL TO GET VA INFO
$.ajax ({
  url: queryVA,
  method: "GET"
}) 
.then(function(response){
  console.log(response);

  var vaPositive = response.positive;
  var vaDeaths = response.death;
  var vaRecovered = response.recovered;

  $("#VA-cases").text("Cases: " + response.positive);
  $("#VA-deaths").text("Deaths: " + response.death);
  $("#VA-recovered").text("Recovered: " + response.recovered);
});
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
