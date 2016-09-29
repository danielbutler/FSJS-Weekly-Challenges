var $pokemon = $('#pokemon');
var $pokeBtn = $('.btn');
var $prevBtn = $('#previous');
var $nextBtn = $('#next');
var prevURL;
var nextURL;
var $pokeCard = $('li.poke-card');

function addPokemon(name, pnumber) {
  $(`
      <li class="poke-card">
          <h3 id="${pnumber}" class="name">${name}</h3>
      </li>
  `).appendTo($pokemon);
}

function makePokemon(name, pnumber, image) {
  $(`
      <li id="${pnumber}" class="poke-card">
          <h3 class="name">${name}</h3>
          <h3 class="image"><img src="${image}">A picture of ${name}</img></h3>
      </li>
  `).appendTo($pokemon);
}

function disablePrev(url) {
  if(url != null) {
    $prevBtn.prop("disabled", false);
  } else {
    $prevBtn.prop("disabled", true);
  }
}

function disableNext(url) {
  if(url !== null) {
    $nextBtn.prop("disabled", false);
  } else {
    $nextBtn.prop("disabled", true);
  }
}

function testPokemon(data) {
  // console.log(data.results);
  $.each(data.results, function(i, pokemon) {
    // 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.
    addPokemon(pokemon.name, i);
  }); // end each
  // get previous url from JSON
  prevURL = data.previous;
  // disable url if it is null
  disablePrev(data.previous);
  // get next url from JSON
  nextURL = data.next;
  // disable url if it is null
  disableNext(data.next);

} // end testPokemon function

function runPokemon(data) {
  // console.log(data.results);
  $.each(data.results, function(i, pokemon) {
    makePokemon(pokemon.name, pokemon.id, pokemon.sprites.front_default);
  }); // end each
} // end testPokemon function

var pokeStartNum;
var pokeURL = "http://pokeapi.co/api/v2/pokemon/";
var pokeData = {
  // nothing to specify I think
};
var $prevBtn = $("#previous.btn");
var $nextBtn = $("#next.btn");
var isDisabled = true;

function getPokeCards() {
  console.log("clicking!");
}

$(document).ready(function() {
// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists

$.getJSON(pokeURL, pokeData, testPokemon);
}); // end ready

// 2.)  Use jQuery to create a click handler for the next and previous buttons.
$prevBtn.click(function(){
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
  pokeURL = prevURL;
  // 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.
  $pokemon.empty();
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.
$.getJSON(pokeURL, pokeData, testPokemon);
});

$nextBtn.click(function(){
  pokeURL = nextURL;
  $pokemon.empty();
  $.getJSON(pokeURL, pokeData, testPokemon);
});

/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like!
*/

// $("#pokemon").click(function(){
//   console.log("clicking!");
// });

$('li.poke-card').click(getPokeCards)
  // $pokemon.empty();
  // pokeURL = "http://pokeapi.co/api/v2/pokemon/" + $('id');
  // $.getJSON(pokeURL, pokeData, runPokemon);
;
