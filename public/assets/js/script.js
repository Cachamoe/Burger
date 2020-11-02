
$(".addBurgerBtn").on("click", function(event) {
    var burger = {
        burger_name: $("#burgerName").val()
    }
    $.ajax({
        url: "/api/burgers", 
        method: "POST",
        data: burger
    }).then(function() {
        location.reload()
    })
})