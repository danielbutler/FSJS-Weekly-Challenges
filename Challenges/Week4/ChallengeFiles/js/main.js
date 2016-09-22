function openBlock (id) {
  id2 = "menu_items_" + id;
  var block = document.getElementById(id);
  var blocks = document.getElementById("main_content").getElementsByTagName("div");
  for (var y = 0; y < blocks.length; y++) {
    blocks[y].style.display = "none";
  }
  block.style.display = "block";

  // TODO: remove the "active" class from all of the li elements inside the menu
  $("#menu li").siblings().removeClass("active");$(this).addClass("active");
  // TODO: add the "active" class to the li element that contains the link that was clicked
  activeLi = document.getElementById(id2);
  $(activeLi).parent("li").addClass("active");

}

// On the li items in the menu id, when you click
$("#menu li").on("click", "a", function(){
  // it will grab the menu item and slice off "menu_items_"
  $id = $(this).attr("id").slice(11);
  openBlock($id);
});


// TODO: add the "hover" class to the menu items when you hover over them
$("#menu a").hover(function(){
  $("#menu a").removeClass("hover");
  $(this).addClass("hover");
});


// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip({
  delay: 1000
});
