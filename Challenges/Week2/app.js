var helloPrompt;
var helloResponses;

//convert the SayHello string to lowercase and return it
function ConvertHello(value) {
  //control and return statements
  helloPrompt = value.toLowerCase();
  console.log("I converted " + helloPrompt);
  return;
}

//Prompt user for input and store variable
helloPrompt = prompt("Say Hello!");

//set the array of helloResponses
helloResponses = [
  "No really, say Hello!",
  "Why don't you say Hello?",
  "But really why aren't you saying Hello?",
  "PLEASE SAY HELLO",
  "JUST SAY HELLO"
]


//Alert user results
for (i = 0; i < helloResponses.length; i++){

  //Call function
  ConvertHello(helloPrompt);
  console.log("helloPrompt is " + helloPrompt)
  if (helloPrompt === 'hello') {
    alert("Hello World!");
    console.log("helloPrompt is " + helloPrompt);
    break;
  } else {
  // alert("Hello?");
    helloPrompt = prompt(helloResponses[i]);
    console.log("helloPrompt is " + helloPrompt);
  }
}
