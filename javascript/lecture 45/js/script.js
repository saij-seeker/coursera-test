//object creation
var comp= new Object();
comp.name= "fb";
comp.ceo =new Object();
comp.ceo.name="mark";
comp.ceo.favcolor="blue";
comp.stockPropName=110;
console.log(comp);
console.log("hello");
console.log(comp.ceo.favcolor);
console.log(comp.stockPropName);
console.log(comp["name"]);
 var stockPropName = "stock of company";
comp[stockPropName] = 110;


 console.log("Stock price is: " + 
   comp[stockPropName]);

////object literal
// var comp={
// 	name: "fb",
// 	ceo: {
// 		name: "mark",
// 		favcolor: "blue"

// 	},
// 	stock: 110
// };
// console.log(comp);
// //console.log("hello");
// console.log(comp.ceo.favcolor);