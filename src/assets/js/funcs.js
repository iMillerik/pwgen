let strings = {
	letters: 'abcdefghijklmnopqrstuvwxyz',
	numbers: '0123456789',
	symbols: '!.,@#$%&*()[]{}+-=_'
}

const rand = (min, max) => {
	return Math.floor(Math.random() * (max-min) + min);
}

export default {

	/* === === === === === */
	/* Generate a password
	/* === === === === === */

	pwgen(length = 16, letters = true, numbers = true, symbols = true) {

		/* === === === === === */
		/* Init values
		/* === === === === === */

		let _string = '';
		let _password = '';

		/* === === === === === */
		/* Make a symbols string
		/* === === === === === */

		if(letters) {
			_string += strings.letters;
		}

		if(numbers) {
			_string += strings.numbers;
		}

		if(symbols) {
			_string += strings.symbols;
		}

		/* === === === === === */
		/* If no parameters
		/* === === === === === */

		if(!letters && !numbers && !symbols) {
			return '';
		}

		/* === === === === === */
		/* Generate a password
		/* === === === === === */

		for(let i = 0; i < length; i++) {
			_password += _string[rand(0, _string.length)][rand(1,4) === 1 ? 'toUpperCase' : 'toLowerCase']();
		}

		return _password;

	},

	rand
}