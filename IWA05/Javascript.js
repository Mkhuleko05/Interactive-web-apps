const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

const location = 'RSA'
let shipping = null
let currency = '$'
let customers = 1

if (location === 'RSA') {
    shipping = 400 ;
    currency ='R' 
}

if (location === 'NAM') {
	shipping = 600 }
else {shipping = 800}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2
const pens = 5 * 'NONE_SELECTED' 

const total = shoes + batteries + pens + shirts + toys
    if (total >= 1000 && location === 'RSA')  (location === 'NAM')
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	