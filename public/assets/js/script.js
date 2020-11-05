
$(".addBurgerBtn").on("click", function(event) {
    let burger = {
        burger_name: $("#burgerName").val()
    }
    $.ajax({
        url: "/api/burgers", 
        method: "POST",
        data: burger
    }).then(function() {
        location.reload()
    });
})


$(".devouredBtn").on("click", function(event) {
    let id = $(this).data("id");
    let newDevoured = $(this).data("newdevoured");
    
    let newDevouredState = {
        devoured: newDevoured
    };

    $.ajax({
        url: "/api/burgers/" + id, 
        method: "PUT",
        data: newDevouredState
    }).then(function() {
        console.log("changed devoured state to", newDevoured);
        location.reload();
    });
})
