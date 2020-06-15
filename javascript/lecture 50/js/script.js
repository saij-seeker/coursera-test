var arr= new Array();
arr[0]="saijal";
arr[1]=2;
arr[2]=function (name){
	console.log("hello" + name);
};
arr[3]={
	course: "webdevelopment"
};
console.log(arr);
console.log(arr[1]);
arr[2](arr[0]);
//console.log(arr[2](arr[0]));
console.log(arr[3].course);
//short hsand arrray
var names=["ayan","jim","rehal"];
console.log(names[1]);
for(var i=0;i< names.length;i++)
{
	console.log("yee "+names[i]);
}
names[100]="saij";
for(var i=0;i< names.length;i++)
{
	console.log("ree "+names[i]);
}
var myobj= {
name: "saijal",
hobby: "writing,anchoring,dancing",
degree: "btech"
}
for(var prop in myobj){
	console.log(prop + ": "+ myobj[prop]);
}
var names2=["ayan","jim","rehal","saijal","riyan"]
console.log("all are imaginary names expect one");
for(var naam in names2)
{
	console.log(names2[naam]);
}
names2.gret="james";
console.log(names2);
for(var naam in names2)
{
	console.log(names2[naam]);
}
