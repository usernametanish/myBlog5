menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Deluxe Pizza",
    "Paneer Tikka Pizza",
    "Mega Spicy Pizza",
    "Sweet And Spicy Pizza",
    "Ultra Cheesy Pizza",
];

function yeet() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function yeet2() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    htmldata = "<section class='cards'>"
    menu_list_array.push(item);
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<div class "cards>' + '<img src = "http://pngimg.com/uploads/pizza/pizza_PNG7143.png"/>' + menu_list_array[i] + '</div>'
    }
 htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;