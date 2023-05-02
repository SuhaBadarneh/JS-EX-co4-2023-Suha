/*.................01.................*/
let array1=['Coding', 'Academy', 'By', 'Orange'];
array1.push("Jordan");
console.log(array1);
array1.pop();
array1.pop();
array1.pop();
console.log(array1);
array1.push("by");
array1.push("Orange");
array1.unshift("to");
array1.unshift("welcome");
console.log(array1);
array1.shift();
array1.shift();
array1.shift();
console.log(array1);
array1.unshift("Coding");
let output1="";
for (let i = 0;i<array1.length;i++)
{
    output1+=array1[i]+" ";
}
console.log(output1);
console.log(array1);
array1.splice(1,1);
console.log(array1);
array1.splice(1,1);
console.log(array1);


/*................. 02 .................*/
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);
fruit.shift();
console.log(fruit);
console.log(fruit.indexOf("orange"));
fruit.push(fruit.indexOf("orange"));
console.log(fruit);
console.log(vegetables.length);
vegetables.push(vegetables.length);
fruit.pop();
let food=[];
food=fruit.concat(vegetables);
console.log(food);
console.log(food.splice(4,2));
console.log(food.reverse());
console.log(food.join(" "));













