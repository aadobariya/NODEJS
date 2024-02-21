const fs = require("fs");
const {add, product} = require('./basic');

/*  Asynchronous  */
// fs.open("abc.txt", (err, data) => {
//   if (err) {
//     console.log("Failed To Open File.");
//   } else {
//     console.log("File Open Successfully.");
//   }
// });

// fs.openSync('abc.txt');
// console.log('File Open Successfully.');

// let t1 = performance.now();
// console.log("Addition is : ",add(25,10));
// fs.readFile('abc.txt','utf-8',(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// console.log("product is: ",product(25,10))
// let t2 = performance.now();

// let txt = `#include<stdio.h>
// int main()
// {
//     printf("Good Morning Gokuldham");
// }`

// fs.writeFile('hello.c',txt,(err)=>{
//     if(err) console.log(err);
//     else console.log('file write sucessfully');
// })

// fs.appendFile('hello.c',txt,(err)=>{
//     if(err) console.log(err);
//     else console.log('file append sucessfully.');
// })