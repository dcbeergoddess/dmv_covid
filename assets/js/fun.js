var queryCat = "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc";

$.ajax({
    headers: {
        "x-api-key": "56c151e1-0419-430a-85f1-85b5a51c2175"
    },
    url: queryCat,
    method: "GET"
})
    .then(function (response) {
        console.log(response);

    });

