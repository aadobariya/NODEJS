// let arr : Array<number> = [10,20,30,40,50];
// let arr : number[] = [10,20,30,40,50];
// let arr : string[] = ["hello","world","hii"];
// console.log(arr);
// let t :[number, string];
// t = [10,"Hello"];
// console.log(t);
// function square(a:number,b:number): number | string
// {
//     return a*b;
// }
// console.log(square(5,5));
// interface skill{
//     name: string;
//     age: number;
//     email?: string;
// }
// let person : skill ={
//     name:'Qode',
//     age:5,
// }
// console.log(person);
// enum color{
//     red,pink,yellow,green,white,black
// }
// let x = color.red;
//  console.log(x);
var person = /** @class */ (function () {
    function person(r, n) {
        this.rollno = r;
        this.name = n;
    }
    person.prototype.showDatails = function () {
        console.log(this.name + " " + this.rollno);
    };
    return person;
}());
var data = new person(25, "qodo");
data.showDatails();
