const date = 2050
const status = 'student'
let count = 0

if (date == 2050) {
	console.log("January", 'New Years Day')
	console.log("March", 'Human Rights Day')

	let date = "April"
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')

	if (status == "student") {
	console.log("June", 'Youth Day')
	//let count = count + 1
    }

	console.log('August', 'Womens Day')
	console.log('September', 'Heritage Day')

	date = 'December'
	console.log(date, 'Day of Reconciliation')
	//let status = count + 3


	console.log(date, 'Christmas Day')
	//let count = count + 1
  

	console.log(date, 'Day of Goodwill')
	//let count = count + 1
	count = '9'
}

console.log('Your status is:'+ status)
console.log('The year is:'+ date)
console.log('The total holidays is:'+ count)