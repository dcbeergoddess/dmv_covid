//AJAX call for MD info:

$.ajax ({
    url: "https://covidtracking.com/api/states?state=MD",
    method: "GET"
  }) 
  .then(function(response){
    console.log(JSON.stringify(response));
    var dateResponse = response.dateModified;
    var dateMomented = moment(dateResponse).format("MMM Do h:mm a");
    $("#lastUpdate").text("Last Update: " + dateMomented);
    $("#totalTests").text("Total Patients Tested: " + response.totalTestResults);
    $("#cases").text("Total Cases: " + response.positive);
    $("#deaths").text("Total Deaths: " + response.death);
    $("#recovered").text("Total Fully Recovered: " + response.recovered);

   var positivePercent = Math.trunc(100*parseInt(response.positive)/parseInt(response.totalTestResults),1);
    $("#positivePercent").text("Percent of Tests that were Positive: " + positivePercent + "%");
  });
  
  