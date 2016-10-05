//#Week 6 JQuery Code Challenge
function populateIdWithHTML(id, text) {
	var element = document.getElementById(id);
	element.innerHTML = text;
}

// to possibly be implemented later...
// function getButtonId(btn) {
// 	return btn.id;
// }

function printThisOut() {
	console.log(this);
}

function changeAttribute(attribute, modifier) {
	console.log(attribute);
	if (modifier === "minus") {
		Box[attribute] --;
	} else {
		Box[attribute] ++;
	}
};
//Objects
var Box = {
	height: 0,
	width: 0,
	volume: 0
};
console.log(Box);
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.

// Click on a button get it's ID and run a function...
// Let's save this for later...
// $('.btn').click(function() {
// 	var btnAttribute = getButtonId(this);
// 	console.log(btnAttribute);
// });

$('#HeightDecrease').click(function() {
	changeAttribute("height", "minus");
});
$('#HeightIncrease').click(function() {
	changeAttribute("height", "plus");
});

//Create a button that prints the object and its attributes to the page (use the span "output".
$('#Print').click(function() {
	var newString = "";
	$.each(Box, function(key, value) {
		newString += "<p>" + key + ":" + value + "</p>";
	});
	populateIdWithHTML("output", newString);
	console.log("print");
});

//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume

$('#WeightDecrease').click(function() {
	changeAttribute("width", "minus");
});
$('#WeightIncrease').click(function() {
	changeAttribute("width", "plus");
});

$('#VolumeDecrease').click(function() {
	changeAttribute("volume", "minus");
});
$('#VolumeIncrease').click(function() {
	changeAttribute("volume", "plus");
});
