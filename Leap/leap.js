/*jshint esversion: 6 */
let message = 'Enter a year to determine if it\'s a leap year!';
let year = window.prompt(message, '2012');
const Reload = location.reload();

// validate input is a valid year
// if year is evenly divisible by 4, leap year
// if year is evenly divisble by 4, but not 100, leap year
// if year is evenly divisble by 100, but not 400, normal
// if year is evenly divisble by 100 and 400, leap year

function isLeapYear(year) {
	if (year.length > 4 || year.length === 0 || parseInt(year) < 0) {
		window.alert('Please enter a valid year');
		Reload;
	} 
	if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
		window.alert(`${year} is a leap year with 366 days!`);
		Reload;
	} else {
		window.alert(`${year} is a normal year with 365 days!`);
		Reload;
	}
}

isLeapYear(year);