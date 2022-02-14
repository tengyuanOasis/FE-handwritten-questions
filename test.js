// !寄生式组合继承  Object克隆对象prototype ， 重新设置constructor指向，设置子构造函数prototype

function jisheng(SubType, SuperType) {
	let prototype = Object(SuperType.prototype);
	prototype.constructor = SubType;
	SubType.prototype = prototype;
}

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
	console.log(this.name);
};
function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

const instance = jisheng(SubType, SuperType);

instance.sayName();
