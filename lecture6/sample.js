// var x = 15;
// {
//     let x=5;
//     console.log(x);
// }
// console.log(x);

// var x = function(x,y){
//     return x+y;
// }; 
// // const x = (x,y) => {         // arrow function dont have this keyword
// //     return x+y;             //better to use
// // };
// // const x = (x,y) => x+y;

// console.log(x(5,5));

//-------------------------------------------------------------------------

// const q1 = ["jan","feb","mar"];
// const q2 = ["apr","may","jun"];
// const q3 = ["jul","aug","sep"];
// const q4 = ["oct","nov","dec"];

// const months = [...q1,...q2,...q3,...q4]; //spread operator can expand the array(itrable object)
// console.log(months);

//-------------------------------------------------------------------------

// const myNumbers = [1,2,3,4,5];
// let maxValue = Math.max(...myNumbers);   //spread operator example where we can pass array as argument

// console.log(maxValue);

//-------------------------------------------------------------------------

// const myNumbers = [1,2,3,4,5];

// let sum = 0;
// for(let num of myNumbers){      //for of loop where we can iterate over array
//     sum += num;
// }
// console.log(sum);

//-------------------------------------------------------------------------


// let name = "CipherSchools";
// let text = "";
// for(let ch of name){
//     text += ch + " ";   //for of loop where we can iterate over string
// }
// console.log(text);

//-------------------------------------------------------------------------


//  const fruits = new Map([    //map is a key value pair
//         ["apple",100],
//         ["banana",200],
//         ["orange",300]
// ]);
// console.log(fruits);
// console.log(fruits.get("apple"));   //get method to get value of key

//-------------------------------------------------------------------------


// const letters  = new Set();    //set is a collection of unique values

// letters.add("a");
// letters.add("b");
// letters.add("a");              //it will not add duplicate values using idea of hashing

// console.log(letters);

//-------------------------------------------------------------------------


// class Car{                              //class is a blueprint of object
//     constructor(name,mfgYear){          //constructor is a method which is called when object is created
//         this.name = name;               //this keyword is used to refer to the object
//         this.mfgYear = mfgYear;
//     }
// }

// const car1 = new Car("BMW",2019);       //new keyword is used to create object
// const car2 = new Car("Audi",2020);
// console.log(car1,car2);

//-------------------------------------------------------------------------

// const myFunction =() =>{
//     return new Promise((resolve,reject) => {    //promise is used to handle async code
//     setTimeout(() => {                          //resolve is used to handle success case
//         console.log("THIS IS INSIDE PROMISE");  //reject is used to handle failure case
//         resolve();                               //resolve is called when promise is successful
//         // reject();                              //setTimeout is used to delay the execution of code
//     },2000);                                    //2000 is time in milliseconds
// });                                             
// };

// myFunction()                                    //myFunction is called
//     .then(() => {                               //then is used to handle success case
//         console.log("RESOLVED");                //it is called when resolve is called
//     })
//     .catch(() => {                              //catch is used to handle failure case
//         console.log("REJECTED");                //it is called when reject is called
//     });


//-------------------------------------------------------------------------


// const person = {
//     firstName: "John",
//     lastNamae: "Doe",
//     age: 30,
//     eyeColor: "blue",
// }; 

// let id = Symbol("id");          //symbol is used to create unique id
// person[id] = 140111;            //symbol is used as key in object

// console.log(person);            //symbol is not enumerable so it will not be printed

//-------------------------------------------------------------------------

// const addTwoNumbers = (a, b = 10) => a+b;  //default parameter is used to provide default value to parameter 

// console.log(addTwoNumbers(10, 11));              //if value is not provided then default value is used 
// console.log(addTwoNumbers(10));              //if value is not provided then default value is used

//-------------------------------------------------------------------------

const addNumbers = (...args) => {        //rest parameter is used to pass multiple arguments
    // console.log(args);                   //it is used to pass multiple arguments as array
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
};

console.log(addNumbers(1,2,3,4,5));      //it will print array of arguments