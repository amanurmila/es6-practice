const ages = [13, 14, 12, 15];
const ages2 = [17, 13, 14];
const ages3 = [5, 7, 4, 15];
const allAges = ages.concat(ages2).concat(ages3);

// Here is es6 method to combine arrays...
const allAges2 = [...ages, ...ages2, 5, ...ages3];

console.log(allAges2);
console.log(allAges);


// Maximum and minimum number from array....
const A = [12, 34, 56, 34, 23];
const maximum = Math.max(...A);
const minimum = Math.min(...A);

console.log('Maximum = ', maximum, 'Minimum = ', minimum);