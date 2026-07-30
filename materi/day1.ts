//versi js
const message = "hello";

//versi ts
const message2: string = "Hello";

// ===================== STRING BUILT IN METHOD ================
const name: string = "BudiB";
const name2: string = "Ucok";

console.log(name.toLowerCase());
("budi");
console.log(name.toUpperCase());
("BUDI");
console.log(name.replace("B", "P"));
("PudiB");
console.log(name.replaceAll("B", "P"));
("PudiP");
console.log(name.concat(" ").concat(name2));
("BudiB Ucok");
console.log(name + " " + name2);
("BudiB Ucok");
console.log(name.slice(0, 3));
("Bud");
console.log(name.slice(0, 2));
("Bu");
console.log(name.split(""));
["Bu", "u", "d", "i", "B"];

//Shift + alt + tanda panah bawah buat copas

//============== TEMPLATE LITERALS / TEMPLATE STRING ======
const welcome: string = "Welcome";
const name3: string = "Jack";

console.log(welcome + " " + name3 + " " + "sadadas" + " " + "asdada");
("Welcome Jack sadadas asdada");
console.log(`${welcome} ${name3} sadadas asdada assdada`);
("welcome Jack sadadas asdada assdada");

//================ NUMBER BUILT IN METHOD ============

const angka: string = "4000";

const angka2: number = 3000;

console.log(Number(angka));
4000;
console.log(parseInt(angka));
4000;

//========= STRONG CONVERSION ========
const angka3: number = 3000;

console.log((angka3));
("3000");
console.log(angka3.toString());
("3000");

//============ BOOLEAN CONVERSION ======
console.log(Boolean(300));
true;
console.log(Boolean(-100));
true;
console.log(Boolean("budi"));
true;
console.log(Boolean(0));
false;
console.log(Boolean(" "));
true;
console.log(Boolean("0"));
true;
console.log(Boolean(""));
false;

//================ DATE ===========
const now = new Date();

console.log(now);
new Date("2026-07-29T04:42:42.000Z"); //contoh

console.log(now.getFullYear());
2026;
console.log(now.getMonth() + 1);
7;
console.log(now.getDate());
29;
console.log(now.getMinutes());
44;

//============BASIC OPERATOR=========
/*
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulo (sisa bagi)
    ** -> pangkat
*/

console.log(1 + 1);
2;
console.log(3 - 1);
2;
console.log(3 * 2);
6;
console.log(6 / 3);
2;
console.log(3 % 2);
1;
console.log(9 % 2);
1;
console.log(3 ** 2);
9;

//=========== MODIFY IN PLACE ============

let n: number = 4;

n += 2; //n = n + 2

console.log(n); 6

//=============== INCREMENT & DECREMENT ==========
let counter: number = 1;

counter++; //increment
console.log(counter); 2

counter--; //decrement
console.log(counter); 1

//=================== COMPARISON OPERATOR ==============
/*
    ==
    ===
    >
    <
    <=
    >=
*/

console.log(2 == 2); true 
console.log(2 == "2"); true //pengecekan di valuenya saja
console.log(2 === 2); true
console.log(2 === "2"); false //pengecekan di value dan tipe data

console.log(2 < 5); true
console.log(5 < 5); false
console.log(5 > 2); true
console.log(10 <= 11); true
console.log(10 <= 10); true
console.log(1 >= 3); false

//=================== MATH ===========
console.log(Math.ceil(4.2)); 5 //membulatkan angka ke atas

console.log(Math.floor(4.8)); 4 //membulatkan angka ke bawah

console.log(Math.round(4.3)); 4 //membulatkan angka ke bulat terdekat
console.log(Math.round(4.7)); 5 //membulatkan angka ke bulat terdekat

console.log(Math.max(4, 3, 10, 11, 13, 20, 100, 250)); 250 //angka terbesar dari sekumpulan angka
console.log(Math.min(4, 3, 10, 11, 13, 20, 100, 250)); 3 //angka terkecil dari sekumpulan angka

console.log(Math.abs(-300)); 300 //menghilangkan tanda negatif

console.log(Math.random()); 0.29780937421 //mengghasilkan acak antara 0 ato 1
console.log(Math.floor(Math.random() * 100) + 1); 14 //angka random dari 1 - 100

//math.floor(math.random() * (max - min + 1) + min)
const min: number = 12;
const max: number = 30;

console.log(Math.random() * (max - min + 1) + min); 24
