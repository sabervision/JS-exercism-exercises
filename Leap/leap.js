var message = 'Enter a year to determine if it\'s a leap year!'
var year = window.prompt(message, '1900')
var start = location.reload();

// validate input is a valid year
if (year.length > 4 || year.length === 0 || parseInt(year) < 0) {
	window.alert('Please supply a valid year');
	start;
} else {
	isLeapYear(year);
}

function isLeapYear(year) {
	if (year % 4) {
		if (year % 100) {
			if (year % 400) {
				window.alert(`${year} is a leap year with 366 days!`);
			}
		} else {
			window.alert(`${year} is a normal year with 365 days!`);
		}
	} else {
		window.alert(`${year} is a normal year with 365 days!`);
	}
}
