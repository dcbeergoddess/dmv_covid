// created variable page = 1 to get the API to switch through cat pictures instead of only choosing one image
var page = 1


$("#cat-API").click(function () {
    // added + page here to include the var above
    var queryCat = "https://api.thecatapi.com/v1/images/search?limit=5&page=" + page + "&order=Desc";

    $.ajax({
        headers: {
            "x-api-key": "56c151e1-0419-430a-85f1-85b5a51c2175"
        },
        url: queryCat,
        method: "GET"
    })
        .then(function (response) {
            // set attribute
            $("#catPicture").attr("src", response[0].url)

        });
    // added page ++ so the var will change images
    page++
});

$("#cat-API").click(function () {
    $(".cardCat").empty();
    $(".cardCat").append("<p>meow</p>");
});


$("#darkMode").click(function () {
    var element = document.body;
    element.classList.toggle("dark-mode");
});