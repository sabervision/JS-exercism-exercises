var message = 'Enter a year to determine if it\'s a leap year!'
var year = window.prompt(message, '1900')

// validate input is a valid year
if (year.length > 4 || year.length === 0 || parseInt(year) < 0) {
	window.alert('Please supply a valid year');
	location.reload();
} else {
	//console.log(year % 100);
	console.log(isLeapYear(year));
}

// if year is evenly divisible by 4, leap year
// if year is evenly divisble by 4, but not 100, leap year
// if year is evenly divisble by 100, but not 400, normal
// if year is evenly divisble by 100 and 400, leap year

// window.alert(`${year} is a leap year with 366 days!`);
// window.alert(`${year} is a normal year with 365 days!`);



function isLeapYear(year) {
	if (year % 4 && !(year % 100)) {
		window.alert(`${year} is a leap year with 366 days!`);
	} else if (year % 4 && year % 100) {
		if (!(year % 400)) {
			window.alert(`${year} is a normal year with 365 days!`);
		} else if (year % 400){
			window.alert(`${year} is a leap year with 366 days!`);
		}
	}
}
