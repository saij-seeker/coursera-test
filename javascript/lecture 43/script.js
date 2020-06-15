// var string="hello";
// //string += " world";
// string = string+"world";
// console.log(string + "!"); 
// console.log((5+4)/3);
// console.log(undefined/5);
// function test(a){
// 	console.log(a/5);
// }
// test(undefined);
// test();
// equality
// var x=4, y=4;
// if(x==y){
// 	console.log("they are equal");

// }
// x="4";
// if(x == y){
// console.log("they are equal and we have type conversion");
// }
// //strict equality
// if( x === y){
// 	console.log("no string equality");
// }
// else{

// 	console.log("no type conversion so they are not equal");
// }
if(false||0||NaN||undefined||null||""){
	console.log("this line wont ever be executed");
}
else{
	console.log("all false");
}
//errored code not running why pta nhi
// var r=0 , n=151, rev=0;
// var t = n;
// for( ;n>0;n=n/10){
// 	r = n%10 ;
//  rev =( rev*10) + r;
 
// }
// // if(t == rev){
// // 	console.log("it is a pallindrome");
// // }
// console.log(rev);
var sum=0;
for(i=0;i<10;i++){
	console.log(i);
	sum=sum+ i;
}
console.log("sum is :"+sum);

