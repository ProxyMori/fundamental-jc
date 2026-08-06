let firstarr = [1, 2, 3, 4, 5];
let secondarr = new Array("a", "b", "c", "d", "e");

console.log(firstarr[2]);
console.log(secondarr[3]);

firstarr[4] = 100;
console.log(firstarr);

delete firstarr[4];
console.log(firstarr[4]);
console.log(firstarr);
