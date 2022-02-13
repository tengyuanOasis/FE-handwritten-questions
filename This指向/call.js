Function.prototype.call2 = function (context) {
	context = Object(context) || window;
	context.fn = this;
	let args = [...arguments].slice(1);
	let res = context.fn(...args);
	delete context.fn;
	return res;
};

const Person = {
	weight: "180kg"
};

const getPerson = function (name, age) {
	console.log("name: ", name);
	console.log("age: ", age);
	console.log(this.weight);
};

getPerson.call2(Person,'KangKang',18)