const person = { name: 'Muhammad Amanullah', age: 23, gender: 'Male', phone: '01625842642', wifeName: 'Urmi Belaly', address: 'Goal Para'};

const { name, age, address } = person;

console.log(name, address, age);



const complexObject = {
    name: 'Aman Ibne Belal',
    age: 23,
    info: {
        address2: 'Goal Para, Digholia, Khulna',
        leader: 'Urmi Belaly'
    }
}

const { address2 } = complexObject.info;
console.log(address2);