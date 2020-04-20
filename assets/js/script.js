
// querySTATE 
var queryDC = "https://covidtracking.com/api/states?state=DC"
var queryMD = "https://covidtracking.com/api/states?state=MD"
var queryVA = "https://covidtracking.com/api/states?state=VA"


// AJAX CALL TO GET DC INFO
$.ajax({
  url: queryDC,
  method: "GET"
})
.then(function (response) {
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
$.ajax({
  url: queryMD,
  method: "GET"
})
.then(function (response) {
  console.log(response);
  var mdPositive = response.positive;
  var mdDeaths = response.death;
  var mdRecovered = response.recovered;
  
  $("#MD-cases").text("Cases: " + response.positive);
  $("#MD-deaths").text("Deaths: " + response.death);
  $("#MD-recovered").text("Recovered: " + response.recovered);
  
});

// AJAX CALL TO GET VA INFO
$.ajax({
  url: queryVA,
  method: "GET"
})
.then(function (response) {
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

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function (response) {
  console.log(queryURL);
  console.log(response);
})

// created a button that toggles dark mode on and off
$("#darkMode").click(function () {
  var element = document.body;
  element.classList.toggle("dark-mode");
});


// CLICK HANDLER FOR THE SEARCH BUTTON
$("#searchButton").click(function() {
  event.preventDefault();
  stateInput=$("#stateInput").val()
  console.log($("#stateInput").val());
  if(stateInput!="" && stateInput!=null){
    getNewState();
  }
});

// build the query URL url: "https://covidtracking.com/api/states/daily?state=VA", and replace VA with user submitted state
// make an AJAX request



// FUNCTION THAT CREATES NEW STATE AND FILLS WITH AJAX CALL
function getNewState(){
  newURL="https://covidtracking.com/api/states?state="+stateInput;
  covidStatsDiv=$("<div>").addClass("card","covidStats");
  cardBodyDiv=$("<div>").addClass("card-body");
  stateName=$("<h2>");
  cases=$("<p>")
  deaths=$("<p>")
  recovered=$("<p>")
  covidStatsDiv.append(cardBodyDiv);
  cardBodyDiv.append(stateName,cases,deaths,recovered);
  // APPEND CARD TO STATE CARDS
  $("#covidStats").prepend(covidStatsDiv);
  $.ajax({
    url: newURL,
    method: "GET"
  }).then(function(response){
    stateName.text("State: "+response.state);
    cases.text("Cases: "+response.positive);
    deaths.text("Deaths"+response.death);
    recovered.text("Recovered" + response.recovered);
    
    
    
    
  });
}






// follow the existing example to add the data to the card

