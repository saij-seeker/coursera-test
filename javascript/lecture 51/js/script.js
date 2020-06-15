function makemultiply(mult) {
	function b(){
		console.log("multiplier is "+mult);
	}
b();
return(
	function (x){
		return  mult*x;
	}
)
}
var doubleall= makemultiply(2);
//console.log(doubleall(10));