// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var traverse = function(node, func){
	func(node);
	node = node.firstElementChild;
	while(node){
		traverse(node, func);
		node = node.nextElementSibling;
	}

};


var getElementsByClassName = function(className){
	var nodeArray = [];
	traverse(document.body, function(node){
		if (node.classList.contains(className)){
			nodeArray.push(node);
		}
	});
	return nodeArray;
};