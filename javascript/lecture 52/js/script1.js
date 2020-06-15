//fakenamespaces
// var yakoovgreeter={};
//  yakoovgreeter.name ="yakoov";
// yakoovgreeter.sayHello =function () {
// 	console.log("hello "+yakoovgreeter.name);
	
// }

(function(window){
var yakoovgreeter={};
  yakoovgreeter.name ="yakoov";
  var greeting ="hello ";
 yakoovgreeter.sayHello =function () {
 	console.log(greeting +yakoovgreeter.name);
 }
 window.yakoovgreeter=yakoovgreeter;
})(window);