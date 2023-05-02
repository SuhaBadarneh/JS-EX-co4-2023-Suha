
/*.................1..................*/

let cleanNames=([" injustice", " SuperMan", "Batman ", " flash "])

let trimmedArray = cleanNames.map(str => str.replace(/\s+/g, ''));

// \s+/g that matches one or more whitespace characters, and replace them with an empty string ''. This effectively removes all the spaces from each string in the array.

console.log(trimmedArray);

/*......................2................*/

function toKm(arr){
    return arr.map(str => str*1.609344);
}
const miles = [10, 20, 30, 40];
console.log(toKm(miles));

/*.....................3....................*/

const numbers = [1, 2, 3, 4, 5];

const sumOfSquares = numbers.map(num => num * num).reduce((acc, curr) => acc + curr, 0);

const average = sumOfSquares / numbers.length;

console.log(average);

/*.....................4....................*/

const input4 = [1, 2, 3, 4, 5];
let out4=[];
out4=input4.map(num => num + 4);
console.log(out4);


/*.....................5....................*/


const inp5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenDoubleEven =inp5.filter(num => num % 2 === 0).map(num => num *2).filter(num => num % 2 === 0).reduce((acc,curr)=>acc+curr,0);

console.log(evenDoubleEven);

/*.....................6....................*/

const words = ['apple', 'banana', 'cherry', 'date'];
let arrUpperCase6=[];
arrUpperCase6=words.map(e=>e.toUpperCase());
console.log(arrUpperCase6);

/*.....................7....................*/
const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
  ];

  const newHeros = heros.map((hero, index) => ({
    hero: hero.name,
    power: hero.power,
    id: index
  }));
  
  console.log(newHeros);
  

/*.....................8....................*/

let out8=[];
function moreSevenCharWords(inputWords){
    for(let e in inputWords){
        if(inputWords[e].length>=7)
        {
            out8.push(inputWords[e]);
        }
    }
    return out8;
}

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(moreSevenCharWords(inputWords));

/*.....................9....................*/

const inp9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers=inp9.filter(e=>{
    
    if(e%2!==0){
        return e;
    }
})
console.log(oddNumbers);
/*............*/

let divTwoOrFive=inp9.filter(e=>{
    
    if(e%2==0 || e%5==0){
        return e;
    }
})
console.log(divTwoOrFive);

/*............*/

const inp9_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let divThree=inp9_2.filter(e=>{
    
    if(e%3==0){
        return e;
    }
}).map(e=>e*2);
console.log(divThree);

/*............*/

let result9=inp9_2.filter(e=>e%5==0).map(e=>e*2);
console.log(result9);



/*.....................10....................*/

let inp10 = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredEvenNums=inp10.filter(e=>e%2==0).map(e=>e**2);
let sum10=inp10.reduce((acc,curr)=>acc+curr,0);
console.log(`squaredEvenNums: ${squaredEvenNums}`);
console.log(`Sum of array elements: ${sum10}`); 

/*.....................11....................*/

let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];

let filteredCountries = countries.filter(e => !e.startsWith('U') && !e.startsWith('R'));
console.log(filteredCountries);
/*..........*/

let upperCaseCountries = filteredCountries.map(e => e.toUpperCase());
console.log(upperCaseCountries);

/*..........*/

let totalCharacters=upperCaseCountries.reduce((acc, curr)=>acc+curr.length,0);

console.log(totalCharacters);

/*.....................12....................*/

const inp12 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
let greaterFifty=inp12.filter(e=>e>50);
console.log(greaterFifty);










