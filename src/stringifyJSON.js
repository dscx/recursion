// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  
	if (obj === null) {
	return "null";
  }	else if (typeof obj === 'string') {
		return ('"' + obj.toString() + '"');
  } else if (typeof obj === "number") {
		return obj.toString();
  } else if (typeof obj === "boolean") {
		return obj.toString();
  } else if (Array.isArray(obj)){
	var arr1 = [];
	for (var i = 0; i < obj.length; i++) {
		arr1.push(stringifyJSON(obj[i]));
	}
		return "[" + arr1.toString() + "]";

} else if (typeof obj === "object"){
	var arr2 = [];
	for (var key in obj){
		if (typeof obj[key] !== 'function' && key !== undefined) {
			var str = "";
			str += (stringifyJSON(key)) + ":" + stringifyJSON(obj[key]);
			arr2.push(str);
		}
			return "{" + arr2.toString() +"}";
	}
}
};