// var menuItem = $(".active");
// var $menuItem = $("#menu a");
// var $menuLi = $("#menu li");
// var $subMenuItem;

function openBlock (id) {
  var block = document.getElementById(id);
  var blocks = document.getElementById("main_content").getElementsByTagName("div");
  // console.log(blocks);
  for (var y = 0; y < blocks.length; y++) {
    blocks[y].style.display = "none";
  }
  block.style.display = "block";
  // plans.style.display = "block";

  // TODO: remove the "active" class from all of the li elements inside the menu
  $("#menu li").siblings().removeClass("active")
  // TODO: add the "active" class to the li element that contains the link that was clicked
  $("#menu a").addClass("active");
}

//ok somehow this will get the other things to run but I don't know how to get the info "plans"?
//This was only working because menu items were "menu_item_plans"
//This is incorrect. It somehow requires the above, but I don't see the connection
// openBlock("plans");

$("#menu").on("click", "a", function(){
  console.log($(this).attr("id"));
  $subMenuItem = $(this).children().attr("id");
  // openBlock($subMenuItem);
  openBlock($subMenuItem);
});


// TODO: add the "hover" class to the menu items when you hover over them
$("#menu a").hover(function(){
  $(this).siblings().removeClass("hover");
}, function(){
  $(this).addClass("hover");
  // console.log("hovering");
});

// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip({
  delay: 1000
});
