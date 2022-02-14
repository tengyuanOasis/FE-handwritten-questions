/**
 * 基本思路很简单：在子类构造函数中调用父类构造函数。
 * 因为毕竟函数就是在特定上下文中执行代码的简单对象，所以可以使用apply()和call()方法以新创建的* 对象为上下文执行构造函数
 * 核心是使用call、apply、bind改变this指向
 */
function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType() {
	// 继承SuperType
	SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"

let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green"

/**
 *
 * 示例中加粗的代码展示了盗用构造函数的调用。通过使用call()（或apply()）方法，SuperType构造函数在为SubType的实例创建的新对象的上下文中执行了。这相当于新的SubType对象上运行了SuperType()函数中的所有初始化代码。结果就是每个实例都会有自己的colors属性。
 *
 */

// !优点： 相比于使用原型链，盗用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参。
// !缺点：盗用构造函数的主要缺点，也是使用构造函数模式自定义类型的问题：必须在构造函数中定义方法，因此函数不能重用。此外，子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式。
function SuperType(name) {
	this.name = name;
}
function SubType() {
	// 继承SuperType并传参
	SuperType.call(this, "Nicholas");
	// 实例属性
	this.age = 29;
}
let instance = new SubType();
console.log(instance.name); // "Nicholas";
console.log(instance.age); // 29