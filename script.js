const calculator = {
	add: function (a, b) {
		return a + b;
	},
	sub: function (a, b) {
		return a - b;
	},
	mul: function (a, b) {
		return a * b;
	},
	div: function (a, b) {
		return a / b;
	},
	mod: function (a, b) {
		return a % b;
	},
	pow: function (a, b) {
		return a ** b;
	},
	sqt: function (a) {
		let x = a / 2;
		for (let i = 0; i < 100; i++) {
			x = (x + a / x) / 2;
		}
		return x;
	}
}

console.log(calculator.sqt(69));