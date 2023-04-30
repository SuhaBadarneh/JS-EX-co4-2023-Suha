let age=27;
if(age>18)
{
    console.log('"You are an adult"');
}
/*........................... */

let score=45;
if(score<=50)
{
    console.log('"You failed the test"');
}

/*........................... */

let name="John";
if(name=="John")
{
    console.log('"Hello John"');
}

/*........................... */

let day="Monday";
if(day!="Saturday")
{
    console.log('"It is a weekday"');
}

/*........................... */

let num=4;
if(num%2==0)
{
    console.log('"The Number is Even"');
}

/*........................... */

let char="a";
if(char.length === 1 && char.match(/[a-z]/i))
{
    console.log('"It is a letter"');
}

/*........................... */

let list=[1,2,3];
if(Array.isArray(list)==true)
{
    console.log('"It is an Array"');
}

/*........................... */

let x=5;
if(x>0)
{
    console.log('"It is a positive"');
}

/*........................... */

let y=-5;
if(x<0)
{
    console.log('"It is a negative"');
}

/*........................... */

let z=9;
if(z%3==0)
{
    console.log('"It is a multiple 3"');
}

/*........................... */

let gpa=3.5;
if(gpa>=3)
{
    console.log('"Congratulations, you have a good GPA!"');
}

/*........................... */

let password="mypassword123";
if(password.length>8)
{
    console.log('"Your password is strong"');
}

/*........................... */

let age1=30;
if(age>=18 && age<65)
{
    console.log('"You are of working age"');
}

/*........................... */



let color="red";
if(color=="red" || color=="green" || color=="blue")
{
    console.log('"Color is a primary color"');
}

/*........................... */

if(!isNaN(11))
{
    console.log("11 is a number");}


if(!isNaN("19"))
{console.log("19 is a number");}

if(isNaN("xyz"))
{console.log("xyz is not a number");}

if(!isNaN("17.5"))
{console.log("17.5 is a number");}

if(isNaN("21F"))
{console.log("21F is  not a number");}