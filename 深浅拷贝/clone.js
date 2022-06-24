/**   浅拷贝 */

/**
 * 前端浅拷贝方案有很多，如 解构赋值、object.assign、
 */

// 👉解构:

let target = [{ name: "clone", age: "18" }];

let clone = [...target];

target[0].hobby = ["swimming", "traveling"];

console.log("clone1: ", clone);

console.log("target: ", target);

// 👉Object.assign()

let clone2 = Object.assign({}, target);

target[0].name = "Object.assign";

console.log("clone2: ", clone2);

// 👉手写浅拷贝

function clone3(target) {
	// 判断数据类型
	if (typeof target !== "object") {
		return target;
	}
	// 初始化
	let newTarget = Array.isArray(target) ? [] : {};

	// 循环对象属性
	for (let key in target) {
		newTarget[key] = target[key];
	}
	// return 新的对象
	return newTarget;
}
