let cash = 1000;
let currentLiabilities = 500;

let cashFlowRatio = cash / currentLiabilities;

console.log(cashFlowRatio); // Output: 2

/*------------------------------------------------- */

let revenues = 1000;
let expenses = 500;

let netIncome = revenues - expenses;

console.log(netIncome); // Output: 500

 /*------------------------------------------------- */
 let liabilities = 1000;
 let equity = 500;
 
 let totalAssets = liabilities + equity;
 
 console.log(totalAssets); // Output: 1500
 
 /*------------------------------------------------- */

 let profit = 1000;
let sales = 500;

let net_Income = profit * sales;

console.log(net_Income); // Output: 500000


 /*------------------------------------------------- */

 let array2 = [7, 9, 2];
 let sum = array2[0]+array2[1]+array2[2];
 let Average=sum/array2.length;
 console.log(Average);


  /*------------------------------------------------- */
let price=150;
let discountPercentage=0.3;
let discount_Amount=price*discountPercentage;//45
let  FinalPrice= price-discount_Amount
console.log(FinalPrice); //output:105
  /*------------------------------------------------- */

  let min_Age=18;
  let max_Age=30;
  let input=20;
  if(input>18 && input<30)
  {console.log("true")}
  /*------------------------------------------------- */
let num1=2;
let num2=3;
console.log(Math.pow(num1, num2));
/* OR*/
function exponential(base,exponent)
{
    return Math.pow(base,exponent);
}
console.log(exponential(2, 3)); // Output: 8
  /*------------------------------------------------- */

  let number1=10;
  let number2=4;
  console.log(number1%number2); // Output: 2
  /* OR*/

  function remainder(num1, num2) {
    return num1 % num2;
  }
  console.log(remainder(10, 4)); // Output: 2


  /*------------------------------------------------- */
console.log(typeof(100));
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof("Water"));
console.log(typeof(false));
console.log(typeof(9!=11));
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof (Infinity) );
console.log(1 == '1');
console.log(1 === '1');

  /*------------------------------------------------- */

  let originalString = "Welcome to Orange";
let uppercaseString = originalString.toUpperCase();
console.log(uppercaseString); // Output: WELCOME TO ORANGE

/*------------------------------------------------- */
let original_String = "Welcome to Orange";
let extractedString = original_String.substring(8, 10);
console.log(extractedString.toUpperCase()); // Output: TO

/*------------------------------------------------- */

let originString = "Welcome to Orange";
let replacedString = originString.replace("Welcome", "Hello") && originString.replace("to", "from") ;
console.log(replacedString); // Output: Hello from Orange

/*------------------------------------------------- */

let O_string="Welcome to Orange";
let rep_string=O_string.toLowerCase();

 /*------------------------------------------------- */

 const ori_String = "Welcome to Orange";
const numberString = (originalString.length);
console.log(numberString); // Output: 17
 /*------------------------------------------------- */


let str2 = "Welcome to Orange";
let r_str = originalString.replace("Orange", '"Orange"');
console.log(r_str); // Output: Welcome to "Orange"

/*-------------------------------------------------*/

let str3="cactus";
let rep_str=str3[0]+str3[1]+str3[2].replace("c","*")+str3[3]+str3[4]+str3[5];
console.log(rep_str); // Output: ca*tus

/*-------------------------------------------------*/

