var SayHello;

//convert the SayHello string to lowercase and return it
function ConvertHello(value) {
  //control and return statements
  SayHello = value.toLowerCase();
  return;  
}

//Prompt user for input and store variable
SayHello = prompt("Say Hello!");

//Call function
ConvertHello(SayHello);

//Alert user results
if (SayHello === 'hello') {
  alert("Hello World!");
} else {
  alert("Hello?");
}