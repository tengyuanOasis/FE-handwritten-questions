Function.prototype.apply2 = function (context) {
	context = Object(context) || window;
	context.fn = this;
	let res;
	let args = [...arguments][1];
	if (args) {
		res = context.fn(...args);
	} else {
		res = context.fn();
	}
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

getPerson.apply2(Person, ["KangKang", 18]);


