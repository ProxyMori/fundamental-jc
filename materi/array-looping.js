//ex menampilkan tiap tiap array di terminal
const fruits = ["apple", "nanas", "pisang", "durian"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let item of fruits) {
  console.log(item);
}
