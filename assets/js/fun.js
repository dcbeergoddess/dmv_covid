var queryCat = "https://anapioficeandfire.com/api/characters/583";

$.ajax({
    url: queryCat,
    method: "GET"
})
    .then(function (response) {
        console.log(response[0]);
        console.log(response[0].positiveIncrease);
    });


// var queryChart = "https://quickchart.io/chart?c=[[insert chart config]].";

// $.ajax({
//     url: queryChart,
//     method: "GET"
// })
//     .then(function (response) {
//         console.log(response[0]);
//         console.log(response[0].positiveIncrease);
//     });

