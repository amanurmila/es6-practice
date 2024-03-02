function add(num1, num2){
    num2 = num2 || 0;
    return num1 + num2;
}

const total = add(15, 45);
console.log(total);



function addNumber(num3, num4 = 0){
    return num3 + num4;
}

const total2 = addNumber(23);
console.log(total2);