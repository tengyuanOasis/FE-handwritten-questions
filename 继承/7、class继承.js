class Person {
	constructor(name, age) {
		this.name = name;

		this.age = age;
	}
	sayAge = function () {
		console.log("sayAge: ", this.age);
	};
	sayName = function () {
		console.log("this.name: ", this.name);
	};
}
let p1 = new Person("kobe", 39);

console.log(p1);

class otherPerson extends Person {
	constructor(name, age, salary) {
		super(name, age); //通过super调用父类的构造方法
		this.salary = salary;
	}
	showName() {
		//在子类自身定义方法
		console.log(this.name, this.age, this.salary);
	}
}

let s1 = new otherPerson("wade", 38, 1000000000);
console.log(s1);
s1.showName();
