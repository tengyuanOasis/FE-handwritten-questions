const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class Promise {
	constructor(executer) {
		this.status = PENDING;
		this.success = undefined;
		this.error = undefined;

		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];

		let resolved = value => {
			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.success = value;
				this.onFulfilledCallbacks.forEach(fn => fn());
			}
		};
		let rejected = () => {
			if (this.status === PENDING) {
				this.status = REJECTED;
				this.error = value;
				this.onRejectedCallbacks.forEach(fn => fn());
			}
		};

		try {
			executer(resolved, rejected);
		} catch (err) {
			rejected(err);
		}
	}

	then = (onFulFilled, onRejected) => {
		if (this.status === FULFILLED) {
			return onFulFilled(this.success);
		}
		if (this.status === REJECTED) {
			return onFulFilled(this.onRejected);
		}
		if (this.status === PENDING) {
			// 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
			this.onResolvedCallbacks.push(() => {
				onFulfilled(this.success);
			});
			this.onRejectedCallbacks.push(() => {
				onRejected(this.error);
			});
		}
	};
}
