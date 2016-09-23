var message = 'Enter a year to determine if it\'s a leap year!'
var year = window.prompt(message, '1900')
console.log(year);

// validate input is 
if (year.length > 4 || year.length === 0) {
	window.alert('Please supply a valid year');
	location.reload();
}
console.log(year.length);