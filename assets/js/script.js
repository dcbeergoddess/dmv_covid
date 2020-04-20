
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
  stateInput=$("#stateInput").val().toUpperCase();
  console.log(stateInput);
  console.log($("#stateInput").val());
  if(stateInput!="" && stateInput!=null){
    getNewState();
  }
});

// build the query URL url: "https://covidtracking.com/api/states/daily?state=VA", and replace VA with user submitted state
// make an AJAX request



// FUNCTION THAT CREATES NEW STATE AND FILLS WITH AJAX CALL
function getNewState(){
  $("#covidStats").empty();
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
    console.log(response);
    stateResponse=response.state;
    stateCase=response.positive;
    stateDeath=response.death;
    stateRecovered=response.recovered;
    
    console.log(stateResponse);
    var stateExpanded=unAbrevState(stateResponse);
    console.log(stateExpanded);
    stateName.text(stateExpanded);
    
    
    if(stateCase===null){
      cases.text("No data");
    } else{
      cases.text("Cases: " + stateCase);
    }
    
    if(stateDeath===null){
      deaths.text("No data");
    } else{
      deaths.text("Deaths: " + stateDeath);
    }
    
    if(stateRecovered===null){
      recovered.text("No data");
    } else{
      recovered.text("Recovered: " + stateRecovered);
    }
    
    
  });
}







function unAbrevState(input){
  // loop through states, find where full name = xxxxxx and return abbrev
  for ( var i=0; i<states.length; i++ ){
    if( states[i].abbrev === input ){
      return states[i].fullname;
    } 
  }
}


var states = [
{ abbrev: "AK", fullname: "Alaska"},
{ abbrev: "AS", fullname:  "American Samoa"},
{ abbrev: "AZ", fullname: "Arizona"},
{ abbrev: "AR", fullname: "Arkansas"},
{ abbrev: "CA", fullname: "California"},
{ abbrev: "CO", fullname: "Colorado"},
{ abbrev: "CT", fullname: "Connecticut"},
{ abbrev: "DE", fullname: "Delaware"},
{ abbrev: "DC", fullname: "District Of Columbia"},
{ abbrev: "FM", fullname: "Federated States Of Micronesia"},
{ abbrev: "FL", fullname: "Florida"},
{ abbrev: "GA", fullname: "Georgia"},
{ abbrev: "GU", fullname: "Guam"},
{ abbrev: "HI", fullname: "Hawaii"},
{ abbrev: "ID", fullname: "Idaho"},
{ abbrev: "IL", fullname: "Illinois"},
{ abbrev: "IN", fullname: "Indiana"},
{ abbrev: "IA", fullname: "Iowa"},
{ abbrev: "KS", fullname: "Kansas"},
{ abbrev: "KY", fullname: "Kentucky"},
{ abbrev: "LA", fullname: "Louisiana"},
{ abbrev: "ME", fullname: "Maine"},
{ abbrev: "MH", fullname: "Marshall Islands"},
{ abbrev: "MD", fullname: "Maryland"},
{ abbrev: "MA", fullname: "Massachusetts"},
{ abbrev: "MI", fullname: "Michigan"},
{ abbrev: "MN", fullname: "Minnesota"},
{ abbrev: "MS", fullname: "Mississippi"},
{ abbrev: "MO", fullname: "Missouri"},
{ abbrev: "MT", fullname:"Montana"},
{ abbrev: "NE", fullname:"Nebraska"},
{ abbrev: "NV", fullname:"Nevada"},
{ abbrev: "NH", fullname:"New Hampshire"},
{ abbrev: "NJ", fullname:"New Jersey"},
{ abbrev: "NM", fullname:"New Mexico"},
{ abbrev: "NY", fullname:"New York"},
{ abbrev: "NC", fullname:"North Carolina"},
{ abbrev: "ND", fullname:"North Dakota"},
{ abbrev: "MP", fullname:"Northern Mariana Islands"},
{ abbrev: "OH", fullname:"Ohio"},
{ abbrev: "OK", fullname:"Oklahoma"},
{ abbrev: "OR", fullname:"Oregon"},
{ abbrev: "PW", fullname:"Palau"},
{ abbrev: "PA", fullname:"Pennsylvania"},
{ abbrev: "PR", fullname:"Puerto Rico"},
{ abbrev: "RI", fullname:"Rhode Island"},
{ abbrev: "SC", fullname:"South Carolina"},
{ abbrev: "SD", fullname:"South Dakota"},
{ abbrev: "TN", fullname:"Tennessee"},
{ abbrev: "TX", fullname:"Texas"},
{ abbrev: "UT", fullname:"Utah"},
{ abbrev: "VT", fullname:"Vermont"},
{ abbrev: "VI", fullname:"Virgin Islands"},
{ abbrev: "VA", fullname:"Virginia"},
{ abbrev: "WA", fullname:"Washington"},
{ abbrev: "WV", fullname:"West Virginia"},
{ abbrev: "WI", fullname:"Wisconsin"},
{ abbrev: "WY", fullname:"Wyoming"}
]
























































