
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
});


// AJAX CALL TO GET MD INFO
$.ajax ({
  url: queryMD,
  method: "GET"
}) 
.then(function(response){
  console.log(response);
});

// AJAX CALL TO GET VA INFO
$.ajax ({
  url: queryVA,
  method: "GET"
}) 
.then(function(response){
  console.log(response);
});