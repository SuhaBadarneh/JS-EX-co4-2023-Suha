

/*................1..............*/

function returnObjProp(obj) {
    return Object.keys(obj);// properties of the object
  }

let user1={
    theName:"Suha",
    Age:25,
    country:"Jordan",
};

console.log(returnObjProp(user1));

/*................2..............*/

function returnObjLength(obj){
    return Object.keys(obj).length;
}

let user2={
    theName:"Besan",
    Age:3,
    country:"Jordan",
};
console.log(returnObjLength(user2));

/*................3.................*/

function mergeObjects(obj1,obj2){
    return Object.assign(obj1,obj2); //merge the two objects properties
}

let obj3_1={
    theName:"Suha",
    Age:25,
   
}

let obj3_2={
    country:"Jordan",
};
console.log(mergeObjects(obj3_1,obj3_2));

/*................4.................*/

function copyObjUpperCase(obj){
    let objPropUpperCase4= {}; //declare an object
    for(let key in obj){
        objPropUpperCase4[key.toUpperCase()] = obj[key];

    }
    return objPropUpperCase4;
}


let user4={
    theName:"Suha",
    Age:25,
    country:"Jordan",
};
console.log(copyObjUpperCase(user4));

/*................5.................*/

function nonNullValues(obj){
    let obj5={};
for(let key in obj){
    if(obj[key]!=null)
    obj5[key]=obj[key];
}
return obj5;
}



let user5={
    theName:"Besan",
    Age:3,
    country:null,
};
console.log(nonNullValues(user5));

/*................6.................*/
let arr6 = [];
function objectPropSort(obj){

return Object.entries(obj).sort();
}
let user6={
    theName:"Suha",
    Age:25,
    country:"Jordan",
};

console.log(objectPropSort(user6));