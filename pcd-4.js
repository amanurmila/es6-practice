class Parent{
    constructor(){
        this.fatherName = 'Belal';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}

const baby1 = new Child('Amanullah Ibne');
const baby2 = new Child('Metia Binte');

console.log(baby1.getFullName());
console.log(baby2.getFullName());