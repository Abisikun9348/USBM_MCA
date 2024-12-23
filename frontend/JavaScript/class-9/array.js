//array : collection of same type of elements .
// contiguous(linear)
// under a single name(variable)
// ex:
 /*let newarray=[];
 console.log(newarray);
 console.log(typeof newarray);*/
 //ex
 /*let name="abiansh";
 let age=21;
 let profession="student";
 let isMarried=false;*/
 // reason 1:we need to arrange under a single variable name.
 // reason2:structutred way,code reading easy to maiantain.
 //let userarray = ["abinash",21,"student",false]//array declaration
// console.log(userarray);
 // alternate way to write array
 /*let newNumbers = new Array(1,2,3,4,5);
 console.log(newNumbers);*/

 // how to check the length of an array:(array.length)
 //create an array and check the length
 /*let userArray = "abinash";
 console.log(userArray.length);*/
  //let cities = ["bbsr","bdk","cuttack"];
/* console.log(cities[0]);
 console.log(cities[1]);
 console.log(cities[2]);
 console.log(cities.length-1);*/


 //modify :
/* let modifycity = "kendrapada";
 cities[2] =modifycity;
console.log(cities);

// Add element :
// push() :
console.log(cities);
let addCity ="ganjam";
cities.push(addCity);
console.log(cities);*/

// add element in an array:(1)using push() method,(2)element will be added in left
// remove element in an array:(1)pop(),(2)remove element in left


//remove :
//push :
/*console.log(cities);
cities.pop();// remove last element of an array 
console.log(cities);

//shift()
console.log(cities);
cities.shift();// shift method remove first element of an array
console.log(cities);

//unshift()
console.log(cities);
cities.unshift();// take back the shifted element from an array
console.log(cities)*/

//concatenation(merge)
// ex:
/*let fruits =["apple","orange","strawberry"];

let addArray = fruits.concat(["guava","litchi"]);
console.log(addArray);

// The includes()method of Array instances determines wheather array includes a certain value among its entries,returning true or false as appropriate
//ex:
let students =["abiansh","kamalhasan","rashmi","gobinda","anjan","bikash"];
console.log(students.includes("anjan"));

// slice()-remove
const animals =['ant','bison','camel','duck','elephant'];
const slice =animals.slice(2);
console.log(slice);
//constonst slice = animals =['ant','bison','camel','duck','elephant'];
console.log(animals.slice(2,4));

//splice()-adding
const months =['jan','march','april','june'];
months.splice(1,0,'feb'); // '0' delete command,"1" index no where need to add
console.log(months);
months.splice(3,0,'july');
console.log(months);
months.splice(2,1,"dec");
console.log(months);

// Array double
const Array1 =[1,2,3,4,5];
for(let i=0;i<Array1.length;i++){
    Array1[i]*=2;
}
console.log(Array1);*/


//question:difference between push(),pop(),shift(),unshift() with proper definition and  examples

// higher order function
//:for each is a higher order function

//callbck function
/*let arr = ["A","B","R","S","J","P"];
for(let i =0;i<arr.length; i++){
  console.log(arr[i]);
}

//using for each();
arr.forEach((a,d)=>{
  console.log(a,d);
});

//using map()
arr.map((a,d) =>{
//console.log(a,);
console.log(a.toLowerCase());
});

const newArray =arr.map((a,d) =>{
return a.toLowerCase();
});
console.log(newArray);*/

//using filter method
/*let newArray =[1,2,3,4,5,6,7]
//filter out the odd numbers.
const oddNumbers = newArray.filter((a) =>{
return a %2 !== 0
});
console.log(oddNumbers);*/

//object
/*let student ={
  name:"abinash",
  age: 21,
  batch:"mca",
  roll:3
};
console.log(student);*/

//using constructor
const student = new Object();
student.name ="abinash";
student.age =21;
student.batch ="mca";
student.roll =3;
console.log(student);

//accesing element
//bracket notation([])
//dot notation(.)
//example :want to access student name

/*console.log(student["name"])// bracket
console.log(student.name)// dot*/

//modify element
// to do :create an array object of 50 students.

 


