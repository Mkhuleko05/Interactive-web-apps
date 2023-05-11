const date= 2050
const status= 'student'
const count = 0


if (date = 2050) {
	console.log(date, "January", 'New Year’s Day')
	console.log(date, "March", 'Human Rights Day')
	
	console.log(date, 'April','Family Day')
	console.log(date,'April','Freedom Day')
	var count = count + 4 


	if (status = "student") {
	  console.log(date,'June','Youth Day')
		var count = count + 1
  }

	console.log(date,'August', 'Women’s Day')
	console.log(date,'September','Heritage Day')
	console.log(date,'Day of Reconciliation')
	var count = count + 3


	if (status = 'parent') {
	  console.log(date,'December','Christmas Day')
		var count = count + 1
	}
	if (status = "student") {
	console.log(date, 'Day of Goodwill')
	var count = count + 1}
  
	}
console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)