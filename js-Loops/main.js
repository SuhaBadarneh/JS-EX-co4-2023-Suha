/*............. 1 ............. */

let out1="";
for(let i=1;i<=10;i++){
out1+=i +" ";
}
console.log(out1);

/*............ 2 ............ */
let i=1;
let out2="";
while(i<=10)
{
   out2+=i+" ";
    i++;
}
console.log(out2);

/*.............. 3 ............ */

let array3=[1,2,3,4,5];
let out3="";
for(let i=0;i<array3.length;i++)
{
    out3+=array3[i]+" ";
}
console.log(out3);

/*............. 4 ............. */
let out4="";
for(let i=0;i<=10;i++)
{
    if((i%2)==0)
    {
        out4+=i+" ";
    }
}
console.log(out4);

/*............. 5 ............. */
let sum5=0;
for(let i=1;i<=10;i++)
{
   sum5+=i;
}
console.log(sum5);

/*............. 6 ............. */

let max6=1;
let array6=[1,2,3,4,5];
for(let i=0;i<array6.length;i++)
{
    if(array6[i]>=max6)
    {
        max6=array6[i];
    }
}
console.log(max6);

/*............. 7 ............. */

let min7=1;
let array7=[1,2,3,4,5];
for(let i=0;i<array7.length;i++)
{
    if(array7[i]<min7)
    {
        min7=array7[i];
    }
}
console.log(min7);

/*............. 8 ............. */
let avg8=0;
let sum8=0;
let array8=[1,2,3,4,5];
for(let i=0;i<array8.length;i++)
{
  sum8+=array8[i];
}
avg8=sum8/array8.length;
console.log(avg8);

/*............. 9 ............. */

let inp8=5;
let out8=1;
for(let i=inp8;i>=1.;i--){
    out8*=i
}
console.log(out8);

/*............. 10 ............. */
let a=0, b=1, c=0;
let inp10=10;
let out10="";

while(true){
    out10+=a+ " ";
    c=a+b;
    a=b;
    b=c;
    if(a>=10)
    break;
   
}
console.log(out10);

/*............. 11 ............. */
let out11="";
for(let i = 2; i <= 20; i++){
    let flag = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            flag = false;
            break;
        }
    }
    if(flag){
        out11+=i+" ";
    }
   
}

console.log(out11);

/*............. 12 ............. */
let inp12=5;
let out12="";
let array12=[1,2,3,4,5,6,7,8,9,10];
for(let i = 0;i<array12.length;i++){
    out12+="5*"+array12[i]+"="+array12[i]*inp12+", ";
}
console.log(out12);

/*............. 13 ............. */
let inp13=[[1,2,3], [4,5,6], [7,8,9]];
let out13="";
for(let i = 0; i < inp13.length; i++){
    for(let j = 0; j < inp13[i].length; j++){
       out13+=inp13[i][j]+ " ";
    }
  }
 console.log(out13);

 /*............. 14 ............. */

 let array14=[1,2,3,4,5];
 let out14="";
 for(let i=array14.length-1;i>=0;i--){
    out14+=array14[i]+" ";
 }
 console.log(out14);

 /*............. 15 ............. */
 let array15=[[1,2,3,4,5],2,3];
 let out15="";
 for(let i = 0; i < array15.length; i++){
    for(let j = 0; j < array15[i].length; j++){
       if(i==0 && (j>=2 &&j<=4))
       out15+=array15[i][j]+" ";
    }
  }
console.log(out15);

 /*............. 16 ............. */
 let array16=[[1,2,3,4,5],2];
 let out16="";
 for(let i = 0; i < array16.length; i++){
    for(let j = 0; j < array16[i].length;j+=2){
out16+=array16[i][j]+" ";
    }
}
console.log(out16);

 /*............. 17 ............. */
 let array17=[[1,2,3,4,5],4];
 let flag;
 for(let i = 0; i < array17.length; i++){
    for(let j = 0; j < array17[i].length; j++){
if(!isNaN(array17[i][j])){
flag=true;
continue;
}
else{
    flag=false;
    break;
}
    }
}
console.log(flag);

 /*............. 18 ............. */

 let arr = [[1,2,1,3,2,1],1];
  let num = 1;
  let occurrences = 0;
  
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === num){
        occurrences++;
      }
    }
  }
  
console.log(occurrences);  
  

 /*............. Lopps 02 ............. */

  /*............. 1 ............. */

  let output1_1="";
 for (let i = 2; i <= 50; i += 2){
 
    output1_1+=i+" ";
    
 }
 console.log(output1_1);

 let x=2;
 let output2_1="";
 while(x<=50)
{
    output2_1+=x+" ";
    x+=2;
}
console.log(output2_1);



  /*............. 2 ............. */
  let output2="";
  for (let i = 2; i <= 50; i += 2){
    output2+=i+" ";
  }
  console.log(output2);
  console.log(output2);

   /*............. 3 ............. */

   let output3_1="";
   for (let i = 2; i <= 50; i += 2){
   
      output3_1+=i+" ";
      
   }
   console.log(output3_1);
  
   let z=1;
   let output3_2="";
   while(z<=50)
  {
      output3_2+=z+" ";
      z+=2;
  }
  console.log(output3_2);
  
     /*............. 4 ............. */
     let output4="";
     for (let i = 1; i <= 100; i++){
        if(i%3==0){
            output4+="Fizz"+" ";
        }
        else if(i%5==0){
            output4+="Buzz"+" ";        }
        else if(i%3==0 && i%5==0){
            output4+="FizzBuz"+" ";        }
        else{
            output4+=i+" ";
        }
     }
     console.log(output4);
     /*............. 5 ............. */
function div3(x){
    return "Fizz ";
}
function div5(n){
    return "Buzz ";
}
function div_both(k){
    return "FizzBuzz ";
}
let output5="";
for (let i = 1; i <= 100; i++){
   if(i%3==0){
      output5+= div3(i);
   }
   else if(i%5==0){
    output5+= div5(i);      }
   else if(i%3==0 && i%5==0){
       output5+="FizzBuz"+" ";        }
   else{
       output5+=i+" ";
   }
}
console.log(output5);

     /*............. 6 ............. */
     let output6="";
    function rec(w){
     
        if(w%3==0){
            output6+="Fizz ";
        }
        else if(w%5==0){
            output6+="Buzz ";
        }
        else if(w%3==0 && w%5==0){
            output6+="FizzBuzz ";
        }
        else {
            output6+=w+" ";
            
        }
      
      w++;
     if(w<=100){
        rec(w);
     }
      return output6;
    }

    
    let o=1;
    let fff="";
    fff+=rec(o);
    console.log(fff);
   
         /*............. 7 ............. */
         let output7="";
function ConvertToBanknotes(arr){
   for(let i=0;i<arr.length;i++)
   {
  
    if(arr[i]>=25)
    {
        output7+="25, ";
    }
   else if(arr[i]<25 && arr[i]>5)
    {
        output7+="5, ";
    }
    else if (arr[i]<=5 && arr[i]>=1)
   {
    output7+="1, ";

   }
   
}
return output7;
}
let input7=[57,25,10,5,1];
let output_7="";
output_7+=ConvertToBanknotes(input7);
console.log(output_7);


/*............. 8 ............. */

// program to check the number of occurrence of a character

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}


const result = countString("Coding Academy by orange", "o");

console.log(result);

/*............. 9 ............. */

/*............. 9-a ............. */
for (let i = 0; i <= 20; i++){
    console.log(i);
}
/*............. 9-b ............. */
for (let i = 3; i <= 29; i++){
    if(i%2!=0)
    {   
        console.log(i);
    }
 
}
/*............. 9-c ............. */
for (let i = 12; i>=-14; i--){
    if(i%2==0)
    {   
        console.log(i);
    }
}

/*............. 9-d ............. */

for (let i = 50; i>=20; i--){
    if(i%3==0)
    {   
        console.log(i);
    }
}

/*............. 10-a............. */
function arrayElement(arr){
    for (let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
let var2=[7,500,'KH404','black',36];

arrayElement(var2);


/*............. 10-b ............. */

function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
      console.log(str[i]);
    }
   
  }

  let var1="Coding Academy";
let reversedStr = reverseString(var1);


/*............. 11 ............. */

let arr11=[7,23,18,9,-13,38,-10,12,0,124];
let even="";
let odd="";
for(let i=0;i<arr11.length;i++){
    if(arr11[i]%2==0)
    even+=arr11[i]+" ";
    else {
        odd+=arr11[i]+" "; 
    }
}
console.log("The EVEN array: "+ even);
console.log("The ODD array: "+ odd);


/*............. 12 ............. */
let mealsNum=3;
let meal1="";
let meal2="";
let meal3="";
let protin=['chicken','pork','tofu','beef','fish','beans'];
let grain=['rice','pasta','corn','potato','quinoa','crackers'];
let vegetables=['beans','green beans','kale','edamame','broccoli','aspargus'];
let beverage=['juice','milk','water','soy milk','soda','tea'];
let desserts=['apple','banana','more kale','ice cream','chocolate','kiwi'];
meal1+=protin[0]+", "+grain[2]+", "+vegetables[4]+", "+beverage[1]+", "+desserts[0];
meal2+=protin[1]+", "+grain[1]+", "+vegetables[4]+", "+beverage[2]+", "+desserts[5];
meal3+=protin[5]+", "+grain[2]+", "+vegetables[3]+", "+beverage[1]+", "+desserts[0];

console.log("Meal 1: "+meal1);
console.log("Meal 2: "+meal2);
console.log("Meal 3: "+meal3);

