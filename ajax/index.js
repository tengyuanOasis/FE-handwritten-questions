function verificationParams(requestInfo) {
	//地址不能为空
	if (!requestInfo.url) {
		throw new Error("输入请求地址");
	}

	//判断是异步是否合规
	if (typeof requestInfo.async !== "boolean") {
		throw new Error("async只接受boolean类型数据");
	}

	//请求方式
	if (!(requestInfo.type.toUpperCase() === "GET" || requestInfo.type.toUpperCase() === "post")) {
		throw new Error("请求方式有误");
	}
}

function myAjax(params) {
	//默认参数对象
	let requestInfo = {
		type: "GET", //请求方式
		url: "",
		data: "", //请求参数
		datatype: "string", //数据类型
		async: true, //异步还是同步
		callBack: function () {} //处理函数
	};

	for (let item in params) {
		requestInfo[item] = params[item];
	}

	verificationParams(requestInfo);

	const { type, url, data, datatype, async, callBack } = requestInfo;

	//数据类型转换
	let str = "";
	let dataType = Object.prototype.toString.call(data);
	if (dataType === "[object String]") {
		str = data.replace(/,/g, "&");
	} else if (dataType === "[object Object]") {
		for (let attr in data) {
			str += attr + "=" + data[attr] + "&";
		}
		str = str.slice(0, -1);
	}

	let xhr;

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if (type.toUpperCase() === "GET") {
		xhr.open(type.toUpperCase(), url + "?" + str, async);
		xhr.send();
	} else {
		xhr.open(type.toUpperCase(), url, async);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}

	xhr.onload = function () {
		if (datatype === "json") {
			callBack(eval("(" + xhr.responseText + ")"));
		} else {
			callBack(xhr.responseText);
		}
	};
}

function Ajax(params) {
	let promise = new Promise(function (resolve, reject) {
		myAjax({
			url: params.url,
			type: params.type.toUpperCase() || "GET",
			data: params.data || "",
			datatype: params.datatype || "string",
			async: params.async || true,
			callBack: function (res) {
				resolve(res);
			}
		});
	});
	return promise;
}
