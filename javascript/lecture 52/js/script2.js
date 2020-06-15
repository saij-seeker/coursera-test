//fakenamespaces
// var johngreeter={};
// johngreeter.name ="john";
// johngreeter.sayHi = function () {
// 	console.log("hi "+johngreeter.name);
	
// }
(function (window){
var johngreeter={};
  johngreeter.name ="john";
   var greeting="hi ";
   johngreeter.sayHi = function () {
	console.log(greeting +johngreeter.name);
	}

window.johngreeter =johngreeter;
})(window);


