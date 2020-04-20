// LOCAL STORAGE DARK MODE
checkDarkMode();
function checkDarkMode(){
  if(localStorage.getItem("darkmode")==="true"){
    var element=document.body;
    element.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode","true");
  }
  console.log(localStorage.getItem("darkmode")); 
}

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




$.ajax({
  url: "https://covidtracking.com/api/states/daily?state=MD",
  method: "GET"
})
  .then(function (response) {
    console.log(JSON.stringify(response[0]));
    day0 = parseInt(response[0].positive);
    day1 = parseInt(response[1].positive);
    day2 = parseInt(response[2].positive);
    day3 = parseInt(response[3].positive);
    day4 = parseInt(response[4].positive);
    day5 = parseInt(response[5].positive);

    date0response = parseInt(response[0].date);
    date1response = parseInt(response[1].date);
    date2response = parseInt(response[2].date);
    date3response = parseInt(response[3].date);
    date4response = parseInt(response[4].date);
    date5response = parseInt(response[5].date);

    date0 = moment(date0response, "YYYYMMDD").format("MMM Do");
    date1 = moment(date1response, "YYYYMMDD").format("MMM Do");
    date2 = moment(date2response, "YYYYMMDD").format("MMM Do");
    date3 = moment(date3response, "YYYYMMDD").format("MMM Do");
    date4 = moment(date4response, "YYYYMMDD").format("MMM Do");
    date5 = moment(date5response, "YYYYMMDD").format("MMM Do");


    console.log(response.date);


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [date0, date1, date2, date3, date4, date5],
        datasets: [{
          label: '# of Positive cases',
          data: [day0, day1, day2, day3, day4, day5],
          backgroundColor: [
            // changed all the colors to red to match the key
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
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

// created a button that toggles dark mode on and off
$("#darkMode").click(function () {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if(element.classList.length!=0){
    console.log("darkmode on");
    localStorage.setItem("darkmode","true")
  } else{
    console.log("darkmode off");
    localStorage.setItem("darkmode", "false")
  }
});

// /api/states/daily - States Historical Data
// Entries saved each day at 4 pm ET.