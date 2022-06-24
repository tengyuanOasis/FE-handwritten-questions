/**
 * 寄生式继承背后的思路类似于 寄生构造函数和工厂模式：
 * 创建一个实现继承的函数 + 增强对象 + return这个对象。
 * 基本的寄生继承模式如下
 */

// 个人理解： 使用Object克隆目标对象，对象增强，return克隆对象
// object()函数不是寄生式继承所必需的，任何返回新对象的函数都可以在这里使用。

function createAnother(original) {
	let clone = new Object(original);
	// 通过调用函数创建一个新对象
	clone.sayHi = function () {
		// 以某种方式增强这个对象
		console.log("hi");
	};
	return clone;
	// 返回这个对象
}

/**
 * 这段代码中，createAnother()函数接收一个参数，就是新对象的基准对象。这个对象original会被传给object()函数，然后将返回的新对象赋值给clone。接着给clone对象添加一个新方法sayHi()。最后返回这个对象。
 */

let person = { name: "Nicholas", friends: ["Shelby", "Court", "Van"] };
let anotherPerson = createAnother(person);
anotherPerson.sayHi(); // "hi"
