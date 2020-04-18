var queryDC2 = "https://covidtracking.com/api/states/daily?state=DC";

$.ajax ({
  url: queryDC2,
  method: "GET"
})
.then(function(response){
  console.log(response[0]);
  console.log(response[0].positiveIncrease);
});

var queryDC3 = "https://covidtracking.com/api/states/info?state=DC";

$.ajax ({
  url: queryDC3,
  method: "Get"
})
.then(function(response2){
  console.log(response2);
})

// link dc twitter updates
// FAQs