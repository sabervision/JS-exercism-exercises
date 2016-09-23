// get the user's name
var name = window.prompt("Greetings! What's your name?");

// Display hello greeting
if (name === '') {
	window.alert("Hello World!");
} else {
	window.alert(`Hello, ${name}`);
}
