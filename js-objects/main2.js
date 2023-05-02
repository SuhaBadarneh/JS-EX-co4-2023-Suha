
/*................1.................*/

let input1={
    name:"Adam",
    age:25,
    geneder:"male",

};
console.log(input1.name,input1.age, input1.geneder);

/*................2.................*/
let input2={
    name:"Adam",
    age:25,
}
Object.assign(input2,{geneder:"male"});
console.log(input2);

/*...................4...................*/
let input4={
    name:"Adam",
    age:25,
}
console.log(input4.name);

/*...................6...................*/

let input6={
    name:"Adam",
    age:25,
    geneder:"male",

};
let output6=[];
for(let key in input6) {
 output6+= key+": "+ input6[key]+", ";
}
let out6=output6.slice(0,output6.length-2);
console.log(out6);

/*...................7...................*/

let input7={
    name:"Adam",
    age:25,
    geneder:"male",

};
let arr7=(Object.keys(input7));
console.log(arr7);

/*...................8..................*/

let input8={
    name:"Adam",
    age:25,
    geneder:"male",
};
let output8=Object.values(input8);
console.log(output8);

/*...................9....................*/
let input9={
    name:"Adam",
    age:25,
    geneder:"male",
};
let output9=Object.entries(input9);
console.log(output9);

/*...................10....................*/

let obj10={
    name:"Adam",
    age:25,
}
let obj10_1={
    gender:"male",
}
console.log(Object.assign(obj10,obj10_1));

/*...................11....................*/


let obj11={
    name:"Adam",
    age:25,
    gender:"male",
};
  Object.freeze(obj11);
  
  obj11.country ="Jordan";
  
  delete obj11.name;
  
  
  obj11.b = 5;
  
  console.log(obj11);
  
/*...................12....................*/

let inp12 = {
    name: "Adam",
    age: 25,
    gender:"male",

  };
  
  // Seal the object
  Object.seal(inp12);
  
  inp12.city = "New York"; // This will have no effect
  
  delete inp12.name; // This will have no effect
  
  inp12.age = 26; // This will work
  
  console.log(inp12);


// for(let key in input6) {
//     console.log(key); // the property in the object separately
//     console.log(input6[key]); // the value of the property in the object separately
// }
// console.log(Object.keys(input6)); // the properties in the object in an array
// console.log(Object.entries(input6)); // the values of properties in the object in an array