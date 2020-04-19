// AJAX CALL FOR BASIC INFO

$.ajax ({
    url: "https://covidtracking.com/api/states?state=VA",
    method: "GET"
  }) 
  .then(function(response){
    console.log(JSON.stringify(response));
    var dateResponse=response.dateModified;
    var dateMomented=moment(dateResponse).format("MMM Do h:mm a");
    $("#lastUpdate").text("Last Update: " +dateMomented);
    $("#totalTests").text("Total Patients Tested: " +response.totalTestResults);
    $("#cases").text("Total Cases: " + response.positive);
    $("#deaths").text("Total Deaths: " + response.death);
    $("#recovered").text("Total Fully Recovered: " + response.recovered);

   var positivePercent=Math.trunc(100*parseInt(response.positive)/parseInt(response.totalTestResults),1);
    $("#positivePercent").text("Percent of Tests that were Positive: "+positivePercent+"%");
  });
  


//   These numbers are updated periodically throughout the day.

// /api/states | CSV

// state - State or territory postal code abbreviation.
// positive - Total cumulative positive test results.
// positiveScore - +1 for reporting positives reliably.
// negative - Total cumulative negative test results.
// negativeScore - +1 for reporting negatives sometimes.
// negativeRegularScore - +1 for reporting negatives reliably.
// commercialScore - +1 for reporting all commercial tests.
// score - Total reporting quality score.
// grade - Letter grade based on score.
// totalTestResults - Calculated value (positive + negative) of total test results.
// hospitalized - Total cumulative number of people hospitalized.
// death - Total cumulative number of people that have died.
// dateModified - ISO 8601 date of the time the data was last updated by the state.
// dateChecked - ISO 8601 date of the time we last visited their website
// hash - A unique ID changed every time the data updates.
// total - DEPRECATED Will be removed in the future. (positive + negative + pending). Pending has been an unstable value and should not count in any totals.



// AJAX CALL FOR DAILY INFO

$.ajax ({
    url: "https://covidtracking.com/api/states/daily?state=VA",
    method: "GET"
  }) 
  .then(function(response){
    console.log(JSON.stringify(response[0]));

  });
  

// /api/states/daily - States Historical Data
// Entries saved each day at 4 pm ET.

// /api/states/daily | CSV

// state - State or territory postal code abbreviation.
// positive - Total cumulative positive test results.
// positiveIncrease - Increase from the day before.
// negative - Total cumulative negative test results.
// negativeIncrease - Increase from the day before.
// pending - Tests that have been submitted to a lab but no results have been reported yet.
// totalTestResults - Calculated value (positive + negative) of total test results.
// totalTestResultsIncrease - Increase from the day before.
// hospitalized - Total cumulative number of people hospitalized.
// hospitalizedIncrease - Increase from the day before.
// death - Total cumulative number of people that have died.
// deathIncrease - Increase from the day before.
// dateChecked - ISO 8601 date of the time we saved visited their website
// total - DEPRECATED Will be removed in the future. (positive + negative + pending). Pending has been an unstable value and should not count in any totals.