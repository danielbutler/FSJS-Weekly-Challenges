var $menuItem = $("#menu li");
var $menuLinks = $("#menu a")
// var testid = document.getElementById("plans");
// var blocks = document.getElementById("main_content").getElementsByTagName("div");
// for (var y = 0; y < blocks.length; y++) {
//   blocks[y].style.display = "none";
//   console.log(blocks[y]);
// }
// testid.style.display = "block";
// console.log("what is testid? It is " + testid.id);

function openBlock (id) {
  console.log("This is id = " + id);
  var block = document.getElementById(id);
  var blocks = document.getElementById("main_content").getElementsByTagName("div");
  for (var y = 0; y < blocks.length; y++) {
    blocks[y].style.display = "none";
  }
  block.style.display = "block";

  // TODO: remove the "active" class from all of the li elements inside the menu
  $("#menu li").siblings().removeClass("active");
  // TODO: add the "active" class to the li element that contains the link that was clicked
  //????????????????????????????????????????????????????????
}

//ok somehow this will get the other things to run but I don't know how to get the info "plans"?
//This was only working because menu items were "menu_item_plans"
//This is incorrect. It somehow requires the above, but I don't see the connection
// openBlock("plans");

$("#menu").on("click", "a", function(){
  $id = $(this).attr("id").slice(11);
//   $subMenuItem = $(this).children().attr("id");
//   // openBlock($subMenuItem);
  openBlock($id);
});


// TODO: add the "hover" class to the menu items when you hover over them
$menuLinks.hover(function(){
  $("#menu a").removeClass("hover");
  $(this).addClass("hover");
});


// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip({
  delay: 1000
});
