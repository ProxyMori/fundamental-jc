//================== OBJECT ===============

const object1 ={}; //cara 1, lebih sering dipake
const object2 = new Object(); //cara 2

interface Adress {
    street: string;
    city: string;
    postalCode: string;
}
interface User {
    nama: string;
    job: string;
    address: Adress;
    umur?: number; //kalo ada tanda tanya, jadi optional. ga wajib untuk dimasukkan
    hobby: string[];
    makan: () => void; //kalo ada fungsi return, bisa jadi string ato number kalo angka
}

const user: User = {
    nama: "Jordan",
    job: "Programmer",
    address: {
        street: "jl jakarta 1",
        city: "Jakarta",
        postalCode: "12345",
    },
    hobby: ["coding", "renang", "mancing"]
    makan() {
        console.log("makan");
    }
};

console.log(user.nama); // Output: Jordan

console.log(user["job"]); // Output: Programmer

console.log(user.address.city); // Output: Jakarta

console.log(user.hobby[1]); // Output: renang

user.makan(); // Output: makan di console.log atas

//============== ADD PROPERTY ==========

const person: any = {
    name: "jack",
};

console.log(person);

person.hobby = "ngoding";

console.log(person);

person["address"] = "jakarta";

console.log(person);

person.name = "Sara";

console.log(person);

//person = {name: 'Sara', hobby: 'ngoding', address: 'jakarta'}; //ini ga bisa

//==================== DELETE PROPERTY ===============

delete person.name;
console.log(person);

//=============== IMUTABLE & MUTABLE =================
/*
    imutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat (primitiv data types)
    mutable: merujuk pada tipe data yang bisa diubah setelah dibuat (non primitive data types)
*/

//imutable
let count: number = 10;

let count2: number = count;

count2 = 20;

console.log(count);
console.log(count2);

//mutable
const org1: any = {name: "Budi"};
//const org2: any = org1 //ini gaga; karena org1 mengikuti org2//shallow copy
const org2: any = { ...org1 };
org2.age = 20;

console.log(org1);
console.log(org2):

//================= OPTIONAL CHAINING ==================
const user2: any = {};

console.log(user2.adress);
console.log(user2.adress?.street); //kasih "?" bakal jalan undefined,bukan error!, jadi coding selanjutnya bisa jalan walaupun code ini salah

console.log("test");

//============== FOR IN ===============
const person2: any ={
    name: "kat",
    age: 22,
    hobby: "renang",
};

for (let key in person2){
    console.log(key);
    console.log(person2[key]);
}

//============= DESTRUCTURING ASSIGNMENT ==========
// mengeluarkan property dari object/array menjadi variable

//versi object
const animal = {
    name: "joe",
    age: 2,
};

console.log(animal.name);
console.log(animal.age);

const{name, age} = animal;

console.log(name);
console.log(age);

//versi array

const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = array;
console.log(a);
console.log(b);


//============ SPRITE OPERATOR ================
// digunakan untuk copy isi object / menggabungkan object

const objectOne = {name: "sora", email: "sora@gami.com"};
const objectTwo = {password: "ksoqkij"};

const result = {...objectOne, ...objectTwo};
console.log(result);

//========= THIS KEYWORD ==============
//mengakses property lain dalam object

const person3 ={
    firstNama: "Jack",
    lastname: "black",
    greet(){
        console.log(`hello, ${this.firstNama} ${this.lastname}`);
        
    },
};

person3.greet();

//============== CLASS ============
// template/cetakan untuk membuat object

//class declaration //lebih sering dipake
class Person {
    greet(){
        console.log("hello");
    }
}

//class expression
const Person2 = class{
    greet(){
        console.log("hello");
    }
};

const human = new Person();
const human2 = new Person();
human.greet();
human2.greet();

//============= CONSTRUCTOR ===========
//method bawaan dari clas yang akan dijalankan pertama kali membuat object baru

class Vehicle{
    brand: string;
    type: string;
    //chassisNumber: string;

    constructor(brand: string, type: string){
        this.brand = brand;
        this.type = type;
        //this.chassisNumber = chassisNumber;
    }

    start(){
        return `${this.brand} ${this.type} engine started!`;
    }
}

const kendaraan = new Vehicle("Toyota", "Avanza");

console.log(kendaraan.brand);
console.log(kendaraan.type);
console.log(kendaraan.start());
//onsole.log(kendaraan.#chassisNumber);
const kendaraan2 = new Vehicle("Honda", "brio");

console.log(kendaraan2.brand);
console.log(kendaraan2.type);
console.log(kendaraan2.start());

//============== INHERITENCE ==============
//pewarisan dari parent class ke child class
// property dan method dari parent class bisa diakses oleh child class

//tidak menggunakan inheritence
class Employee{
    name: string;
    salary: number;
    department: string;

    constructor(name: string, salary: number, department: string){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    work(){
        console.log(`${this.name} is working`);
    }
}
const worker1 = new Employee("budi", 2500000);

//menggunakan konsep INHERITENCE
class Employee2 {
    name: string;
    salary: number;

    constructor(name: string, salary: number,){
        this.name = name;
        this.salary = salary;
    }

    work(){
        console.log(`${this.name} is working`);
    }

}

class Manager2 extends Employee2 {
    department: string;

    constructor(name: string, salary: number, department: string){
        super(name, salary;)
        this.department = department;
    }
}

const manager = new Manager2("sara", 5000000, "HR");

console.log(manager.name);
console.log(manager.salary);
console.log(manager.department);
console.log(manager.work());




