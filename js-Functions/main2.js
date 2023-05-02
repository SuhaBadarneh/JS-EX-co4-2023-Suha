
/*............... 1..............*/

function findSmallest(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  

  const arr = [30, 45, 60, 7];
  const result = findSmallest(arr);
  console.log(result); 
  
  /*............... 2..............*/

  function alphabetize(str) {
    return str.split("").sort().join("");
  }
  const inp2 = alphabetize("hello");
  console.log(inp2);

    /*............... 3..............*/
    function factorial(n) {
        if (n < 0) {
          return null; 
        }
        if (n === 0) {
          return 1; 
        }
        let result = 1;
        for (let i = 1; i <= n; i++) {
          result *= i;
        }
        return result;
      }
      
   
      const inp3 = factorial(8);
      console.log(inp3); 

 /*............... 4..............*/

          function oddOrEven(num) {
            if (num % 2 === 0) {
              return "Even";
            } else {
              return "Odd";
            }
          }
          
        
          const inp4 = oddOrEven(9);
          console.log(inp4);
          
/*............... 5..............*/

function evenNum(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  

  const inp5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const out5 = evenNum(inp5);
  console.log(out5);
  
/*............... 6..............*/

  function numbersOnly(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const inp6 = ["Ayham", 3, 7, "Alaa", 13, "coding"];
  const out6 = numbersOnly(inp6);
  console.log(out6);
  
/*............... 7................*/

function addUp(num) {
    let sum = 0;
    for (let i = num; i >= 0; i--) {
      sum += i;
    }
    return sum;
  }
  
  const inp7 = addUp(8);
  console.log(inp7);
  
/*............... 8................*/

function minMaxLengthAverage(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    const average = arr.reduce((acc, curr) => acc + curr, 0) / length;
    return [min, max, length, average];
  }
  
  const inp8 = minMaxLengthAverage([7, 13, 3, 77, 100]);
  console.log(inp8);

/*............... 9................*/

function romanNumbers(num) {
    const romanSymbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let romanNumeral = '';
  
    for (let symbol in romanSymbols) {
      while (num >= romanSymbols[symbol]) {
        romanNumeral += symbol;
        num -= romanSymbols[symbol];
      }
    }
  
    return romanNumeral;
  }
  
  const inp9 = romanNumbers(1989);
  console.log(inp9);
  
/*............... 10................*/


  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  
  const inp10 = countWords('hello from CodingAcademy!');
  console.log(inp10);
  
  
/*............... 11................*/

  function multiplyByLength(arr) {
    const length = arr.length;
    return arr.map(num => num * length);
  }
  

  const inp11 = multiplyByLength([4, 2, 5]);
  console.log(inp11); 
  

  /*............... 12................*/


function checkEnding(str1, str2) {
  const str1End = str1.slice(-2);
  return str1End === str2;
}

const inp12 = checkEnding("CodingSchool", "Ac");
console.log(inp12); 


  /*............... 13................*/

  function doubleChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i] + str[i];
    }
    return result;
  }
  const inp13 = doubleChar('Coding');
     console.log(inp13); 


 /*............... 14................*/

 function findIndex(arr, el) {
    return arr.indexOf(el);
  }
  
  const myArr = ['Ali', 'Mazen', 'Ayham', 'Murad'];
  const index = findIndex(myArr, 'Ali');
  console.log(index); 
  

   /*............... 15................*/

   function getAbsSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Math.abs(arr[i]);
    }
    return sum;
  }
let inp15= [-1, -3, -5, -4, -10, 0];
console.log(getAbsSum(inp15));


