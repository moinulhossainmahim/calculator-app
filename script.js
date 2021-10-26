import { Calculator } from './Calculator.js'

const primaryOperandDisplay = document.querySelector('[data-primary-operand]')
const secondaryOperandDisplay = document.querySelector(
	'[data-secondary-operand]'
)
const operationDisplay = document.querySelector('[data-operation]')
// Actions
// 1. Click clear button
// 2. click delete button
// 3. click an operation
// 4. click a number
// 5. click equals
// 6. click the period buttons

const calculator = new Calculator(
	primaryOperandDisplay,
	secondaryOperandDisplay,
	operationDisplay
)

document.addEventListener('click', (e) => {
	if (e.target.matches('[data-all-clear]')) {
		calculator.clear()
	}
	if (e.target.matches('[data-number]')) {
		calculator.addDigit(e.target.textContent)
	}
	if (e.target.matches('[data-delete]')) {
		calculator.removeDigit()
	}
	if (e.target.matches('[data-operation]')) {
		calculator.chooseOperation(e.target.textContent)
	}
	if (e.target.matches('[data-equals]')) {
		calculator.evaluate()
	}
})
