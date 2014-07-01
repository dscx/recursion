// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  
var arr1 = [];
  var arr2 = [];
  

  if (typeof obj === "function" || undefined){
	return undefined;
  }	else if (obj === null) {
	return "null";
  }	else if (obj === String) {
	return str.quote(obj);
  }	else {
	return obj.toString();
}
	return obj;

};