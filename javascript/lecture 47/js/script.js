//by value 
// var a=7;
// var b= a
// console.log("a is: " +a);
// console.log("a is: " +b);
// b=5;
// console.log("a is: " +a);
// console.log("a is: " +b);
//  by reference
// var a={ x: 6 };
// var b = a;
// console.log("x of a is " +a.x);
// console.log("x of b is " +b.x);
// console.log(a);
// console.log(b);
// b.x=3;
// console.log("x of a is " +a.x);
// console.log("x of b is " +b.x);
// console.log(a);
// console.log(b);
//func pass by ref
// function show(Objvalue) {
// console.log("before update");
// console.log("object value is:");
// console.log(Objvalue);
// Objvalue.x= 6;
// console.log("after update");
// console.log("object value is:");
// console.log(Objvalue);

// };
// value={x: 8};
// console.log(value);
// show(value);//Objvalue=value; objvalue will be created as an object since e value is an 
// //is an object and thus objvalue will be refering to the address that the value will be.
// console.log("after update");
// console.log(value);
//func pass by value
function show(evar) {
console.log("before update");
console.log("evar  is:"+evar);

evar=5;
console.log("after update");
console.log("evar is:" +evar);


};
var lee =8;
console.log("lee is" +lee);
show(lee);//evar=lee
console.log("after update lee is" +lee);
