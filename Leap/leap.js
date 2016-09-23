var message = 'Enter a year to determine if it\'s a leap year!'
var year = window.prompt(message, '1900')


// validate input is a valid year
if (year.length > 4 || year.length === 0 || parseInt(year) < 0) {
	window.alert('Please supply a valid year');
	location.reload();
}
console.log(year.length);