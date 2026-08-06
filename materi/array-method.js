// =========== ARRAY METHOD ===========

// .length : menghitung jumlah item(s) suatu array
const arrfruits = ["apple", "mangga", "nanas"];
console.log(arrfruits.length);

// .includes : mengecek apakah suatu item(s) ada di dalam array
const arralphabets = ["a", "b", "c", "d", "e"];
console.log(arralphabets.includes("a")); // true
console.log(arralphabets.includes("f")); // false

// .indexOf : mengecek index dari suatu item(s) di dalam array
const arrcars = ["honda", "wuling", "suzuki"];
console.log(arrcars.indexOf("wuling"));
console.log(arrcars.indexOf("daihatsu")); // -1 (item tidak ditemukan)
console.log(arrcars.indexOf("Wuling")); // -1 (case sensitive)

// .lastIndexOf : mengecek index terakhir dari suatu item(s) di dalam array
const arrstadium = ["GBK", "Pakansari", "Gelora Bandung Lautan Api", "GBK"];
console.log(arrstadium.lastIndexOf("GBK"));
console.log(arrstadium.indexOf("GBK"));

// .push : menambahkan item(s) di akhir array
// .unshift : menambahkan item(s) di awal array
// .pop : menghapus item(s) di akhir array
// .shift : menghapus item(s) di awal array
const arranimal = ["kucing", "anjing", "kelinci"];
arranimal.push("ikan");
console.log(arranimal);
arranimal.unshift("burung");
console.log(arranimal);

const arrstudents = ["Budi", "Andi", "Setio"];
arrstudents.pop();
console.log(arrstudents);
arrstudents.shift();
console.log(arrstudents);

// .splice : menghapus atau menambahkan atau mengupdate item(s) di tengah array
// .splice(indexAwal, jumlahItemYangDihapus, itemBaru1, itemBaru2, ...);
const arrlaptopbrands = ["Asus", "Acer", "Lenovo", "Deli"];
arrlaptopbrands.splice(2, 1);
console.log(arrlaptopbrands);

const arrshoesbrands = ["Nike", "Adidas", "Puma", "Reebok"];
arrshoesbrands.splice(1, 2, "New Balance", "Vans");
console.log(arrshoesbrands);
arrshoesbrands.splice(3, 0, "New Balance", "Vans");
console.log(arrshoesbrands); //array(6) seharusnya ga ada
