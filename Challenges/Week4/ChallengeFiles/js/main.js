var mainMenu = document.getElementById("menu"); //ul with id menu
// var menuItem = $(".active");
var $menuItem = $("#menu li");
var SsubMenuItem;

// function openBlock (id) {
function openBlock (id) {
    // console.log("id is " + id);
    var block = document.getElementById(id);
    // console.log("Block is " + block);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";

    // TODO: remove the "active" class from all of the li elements inside the menu
    $(this).siblings().removeClass("active");
    // TODO: add the "active" class to the li element that contains the link that was clicked
    $(this).addClass("active");
}

//ok somehow this will get the other things to run but I don't know how to get the info "plans"?
//This was only working because menu items were "menu_item_plans"
//This is incorrect. It somehow requires the above, but I don't see the connection
// openBlock("plans");

$menuItem.click(function(){
  console.log($(this).children().attr("id"));
  $subMenuItem = $(this).children().attr("id");
  // openBlock($subMenuItem);
});



// TODO: add the "hover" class to the menu items when you hover over them
// $menuItem.hover(function(){
//   $(this).siblings().removeClass("hover");
//   $(this).addClass("hover");
//   console.log("hovering");
// });

// TODO: set up the tooltip plugin on all of the links in the menu
