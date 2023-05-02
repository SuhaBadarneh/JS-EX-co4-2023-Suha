/*...................1..............*/
let array1=[1,2,3,4,5];
array1.forEach(element => console.log(element));
let output1=[];
/*...................2..............*/
const squaredNumbers = array1.map((e) => e ** 2);
console.log(squaredNumbers);

/*...................3..............*/


const evenNumbers = array1.filter((e) => e % 2 === 0);
console.log(evenNumbers);

/*...................4..............*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

/*...................5..............*/

let input5=["banana","apple","cherry"];
let sortArray5=input5.sort();
console.log(sortArray5);

/*...................6..............*/

let input6=["apple","banana","cherry"];
let reverseArray6=input6.reverse();
console.log(reverseArray6);


/*...................7..............*/
let input7=[1, 2, 3];
let input7_1=[4, 5, 6];
let concatArray7=input7.concat(input7_1);
console.log(concatArray7);


/*...................8..............*/
let input8=[1,2,3,4,5,6];
let output8=input8.slice(0,2).concat(input8.slice(3,6));
console.log(output8);


/*...................9..............*/

let input9=[1, 2, 3, 4, 5];
let spliceArray9=input9.splice(1,1);
console.log(spliceArray9);

/*...................10..............*/
let input10=[1, 2, 3, 4, 5];
console.log(input10.indexOf(3));

/*...................11..............*/

let input11=[1, 2, 3, 4, 5];
let output11=input11.join("");
console.log(output11);

/*...................12..............*/
let input12="1,2,3,4,5";
console.log(input12.split(''));

/*...................13..............*/
let input13=[1, 2, 3, 4, 5];
console.log(input13.length);


/*...................15..............*/
let input15=[1,2,3,4,5];
let output15="";
for(let index in input15){
   output15+=index+", ";
}
console.log(output15);
/*...................16..............*/

let input16=[1,2,3,4,5];
console.log(Array.isArray(input16));


/*...................17..............*/

let input17= {0: "a", 1: "b", 2: "c", length: 3};
let output17=Array.from(input17);
console.log(output17);

/*...................18..............*/

let input18=Array.of(1,2,3,4,5);
console.log(input18);


/*...................19..............*/

let input19=[1,2,3,4,5];

input19.fill(0, 0, 3); // Fill the first three elements with 0

console.log(input19); // Output: [0, 0, 0, 4, 5]


/*...................20..............*/

const myArray = [1, 2, 3, 4, 5];

myArray.copyWithin(1,0,1); //1:paste the copied elements in index 1 ,0,1:will copy the element from index 0 to o index one but not include the index one
myArray.copyWithin(2,0,1);
console.log(myArray); // Output: [1, 4, 5, 4, 5]



