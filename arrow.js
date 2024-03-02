const doubleIt = num => num * 2;
const result = doubleIt(13);
console.log(result);


const addNums = (num1, num2) => num1 + num2;
const total = addNums(5, 12);
console.log(total);


const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const result = sum * sub;
    return result;
}

const result3 = doMath(7, 4);
console.log(result3);