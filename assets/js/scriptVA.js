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

var day0;
var day1;
var day2;
var day3;
var day4;
var day5;


var date0;
var date1;
var date2;
var date3;
var date4;
var date5;




$.ajax ({
  url: "https://covidtracking.com/api/states/daily?state=VA",
  method: "GET"
}) 
.then(function(response){
  console.log(JSON.stringify(response[0]));
  
  day0=parseInt(response[0].positive);
  day1=parseInt(response[1].positive);
  day2=parseInt(response[2].positive);
  day3=parseInt(response[3].positive);
  day4=parseInt(response[4].positive);
  day5=parseInt(response[5].positive);
  
  date0response=parseInt(response[0].date);
  date1response=parseInt(response[1].date);
  date2response=parseInt(response[2].date);
  date3response=parseInt(response[3].date);
  date4response=parseInt(response[4].date);
  date5response=parseInt(response[5].date);
  
  date0=moment(date0response, "YYYYMMDD").format("MMM Do");
  date1=moment(date1response, "YYYYMMDD").format("MMM Do");
  date2=moment(date2response, "YYYYMMDD").format("MMM Do");
  date3=moment(date3response, "YYYYMMDD").format("MMM Do");
  date4=moment(date4response, "YYYYMMDD").format("MMM Do");
  date5=moment(date5response, "YYYYMMDD").format("MMM Do");



  
  
console.log(response.date);



  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [date0 , date1, date2,date3,date4,date5],
      datasets: [{
        label: '# of Positive cases',
        data: [ day0,day1, day2, day3, day4, day5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
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



