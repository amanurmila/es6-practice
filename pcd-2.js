const A = [23, 45, 34, 56, 51, 12];
const maximum = Math.max(...A);
const minimum = Math.min(...A);

console.log(`Maximum = ${maximum}\nMinimum = ${minimum}`);


const C = [12, 23, 13, 15, 34, 23];
const D = [45, 23, 12, 16, 27, 41, 35];
const add = C.concat(D);

console.log(add);


const E = [13, 24, 35, 17, 19, 21, 23, 56];
const F = [56, 34, 23, 14, 53];
const G = [14, 25, 17, 39, 10, 27];
const add2 = [...E, ...F, ...G];

console.log(add2);