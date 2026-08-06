//=========== IF STATEMENT ==============
/*
    if(condition){
    code block
    }
*/

const age: number = 20;

if(age >= 17){
console.log("Anda bisa buat KTP");
}

//========== ELSE STATEMENT ===========
// backup plan dari if statement

const age1: number = 10;

if(age1 >= 17){
    console.log("Anda bisa buat KTP");
} else{
    console.log("Anda belum bisa buat KTP");
    
}

//============ ELSE IF STATEMENT ============

const grade: string = "A";

if(grade === "A"); {
console.log("Nilai bagus");
} else if (grade === "B") {
    console.log("Nilai lumayan");    
} else if (grade === "C") {
    console.log("nilai buruk");
} else {
    console.log("nilai tidak diketahui"); 
}

//==================== SWITCH CASE ===============
/*
    switch(value) {
        case "value 1":
            code
            break;
        case "value 2":
            code
            break;
        default:
            code
            break;
    }
*/
const day: string = "senin";

switch(day) {
    case "senin":
            console.log("hari senin");
            
            break;
        case "selasa":
            console.log("hari selasa");
            
            break;
        case "rabu":
            console.log("hari rabu");
            
            break;
        default:
            console.log("har tidak ditemukan");
            
            break;
}

//=============== LOGICAL OPERATOR =============
// && -> and
// || -> or
// ! -> not

// or -> kalau salah 1 ada yg nilai true akan menghasilkan nilai true

const car: string = "BMW";

if (car === "BMW" || car === "mercy") {
    console.log("mobil jerman");
} else {
    console.log("mobil jepang");
}

// and -> harus keduanya bernilai true agar menghasilkan true

const umur: number = 19;
const punyaSIM: boolean = true;

if(umur >= 17 && punyaSIM === true) {
    console.log("boleh bawa kendaraan");
} else {
    console.log("belum boleh bawa kendaraan");
}
// not -> membalikkan nilai boolean
const issunny: boolean = false;
const israining: boolean = !issunny;

console.log(issunny);
console.log(israining);

const input = "123123";

if (!input) {
    console.log("test");
} else{
    console.log("test 2");
}

//================ TERMARY OPERATOR =========
//shortcut utk if else condition
//condition ? true : false

const str: string = "javascript";

if(str === "javascript") {
    console.log("javascript");
} else{
    console.log("not javascript");
    
}

console.log(str === "javascript" ? "javascript" : "not javascript");

console.log(

str === "javascript" ? "javascript" : str === "tyepscript" ? "typescript" :"not found"
);

//============ LOOP STATEMENT ===========
// rangkaian instruksi yg dilakukan berulangkali hingga kondisinya tdiak terpenuhi
//type loop : for loop, while loop, do while loop

//for loop -> mempunya 3 statment
//statement 1 : menginisialisasikan variable dari looping itu sendiri
//statement 2 : mendefine kondisi dari looping tsbt
//statement 3 : kode yang di eksekusi diakhir setiap literasi

/*
    for(statement1;statement2;statement3){
        code block yg akan diulang
    }
*/

for(let i = 0; i < 10; i++){
    console.log("hello world");
}

//while loop -> pengecekan di awal
let i: number = 0; 
while(i < 10){
    console.log("hello world");
    i++;
}

//do while loop -> pengecekan di akhir

let count: number = 1;

do {
    console.log("ini literasi ke : " + count);
    count++;
} while (count <= 5);

//=================== BREAK =============
//utk menghentikan loop

let num: number = 0;

while(true){
    console.log("num : " + num);

    if (num >= 5) {
        break;
    }
    
    num++;
}

//======== CONTINUE ========
//melakukan skip pada looping

for(let i = 0;i < 5; i++) {
    if (i === 2){
        continue;
    }

    console.log(i);
}
