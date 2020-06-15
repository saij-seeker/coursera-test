var message = "in global";
var ms="hell0";
console.log("global: message = " + message);
/*
var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message); 
  }

  b();
}

a();*/
var a= function (){
	var ms="insider a";
	console.log("msg is "+ms);
b();
}
a();
function b(){
	//var ms="kaiswe ho re";
	console.log(ms);
}