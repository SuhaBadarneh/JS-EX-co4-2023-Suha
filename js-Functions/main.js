/*............1..............*/

function strToArray(str){
    let out1=str.split(" ");
console.log(out1);
}
let inp1="Orange Jordan";
strToArray(inp1);
/*............2..............*/
function hideNumber(str){
    let out2="*******"+inp2.substring(7,10);
    console.log(out2);
}
let inp2="0776807777";
hideNumber(inp2);


/*............3 method 1..............*/

function hideEmail(email) {
    let inp3_1=inp3.split("@"); 
    let p1=inp3_1[0].substring(0, 6);
    let p2=inp3_1[1].substring(0,5);
    let out3=p1+"...@"+p2+".com";
    console.log(out3);
  }

let inp3="orange_academy@orange.jo";
hideEmail(inp3);

/*............... 4 ..............*/

function capitalizeWords(string) {
    const words = string.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedString = capitalizedWords.join(' ');
    return capitalizedString;
  }
  
  const string = 'coding academy by orange';
const capitalizedString = capitalizeWords(string);
console.log(capitalizedString);

/*............... 6 ..............*/
function reverseNum(num){
    let numToStr=inp6.toString().split("").reverse().join("");
    return numToStr;
}


let inp6=92485;
console.log(reverseNum(inp6));

/*............... 7 method 1..............*/
function swap(a,b)
{
    let c=b;
    let n=a;
    let m=c;
    console.log(m,n);
}
let x=3;
let y=5;
swap(x,y);

/*............... 7 method 2..............*/
function swap2(m,n){
  let con=x+" "+y;
  let out6=con.split(" ").reverse().join(" ");
  console.log(out6);
}
let m=3;
let n=5;
swap2(m,n);

/*............... 7 method 3 ..............*/

function swap3(m,n){
  let out7=[n,m];
  return out7.join(" ");
}

let o=3;
let p=5;
console.log(swap3(o,p));

/*............... 8 ..............*/
function removeCharacter(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}


const inp8 = removeCharacter("Orange", 3);
console.log(inp8);

/*............... 9..............*/

function merge(str1,str2){
  return str1.slice(1) + str2.slice(1);
}

let inp9_1="lora";
let inp9_2="inge";
console.log(merge(inp9_1,inp9_2));


/*............... 10..............*/

function ensureChar(str1,str2){
  if(str1.charAt(0)==str2.charAt(0)){
    return true;
  }
  else{
    return false;
  }
}

let str1="o";
let str2="orange";
console.log(ensureChar(str1,str2));

/*............... 11..............*/

function stringToArray(str){
  return str.split(" ");
}
let inp11="Coding Academy by Orange";
console.log(stringToArray(inp11));

/*............... 12..............*/

function alphabetize(str) {
  return str.split("").sort().join("");
}
const inp12 = alphabetize("orange");
console.log(inp12);

