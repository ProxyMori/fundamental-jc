console.log("Hello World");

// ===================== VARIABLE ==========
// storage / penampung data
// var, let, const

var person = "Budi";
console.log(person);

let person2 = "Siti";
person2 = "Joko";
console.log(person2);

const person3 = "Jack";
//person3 = "Test"; //ini gak bisa
console.log(person3);

//============ VARIABLE NAMING ============
/*
    - must contain letters, digit, or symbol "S" and "_"
    - the first character must not digit
    - case sensitive
*/

const companyName = "Purwadhika"; //camel  case
const CompanyName = "Purwadhika"; //pascal case
const company_Name = `Purwadhika`; //snake case

//shift + alt + f buat windows buat prettier code formatting

//=============  DATA TYPES =============
//primitive data types : string, number, boolean, null dan undefined
//non primitive : object dan array

//string -> "" '' ``
console.log("Hello");
console.log("Hello");
console.log(`Hello`);

//number -> semua angka
console.log(1);
console.log(100);
console.log(-100);
console.log(2.5); //kalo coma di angka harus titik

//boolean -> true or false
console.log(true);
console.log(false);

//null -> menandakan sebuah value itu masih kosong dan belum terisi
let orang = null;

//undefined -> js tdk tau isinya
let orang2 = undefined;

//active quokka -> control + k + q
