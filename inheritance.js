class Parent{
    constructor(){
        this.FatherName = 'Belal';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.Name = name;
    }

    getFullName(){
        return this.Name + ' ' + this.FatherName;
    }
}

const baby1 = new Child('Aman');
const baby2 = new Child('Metia');

console.log(baby1.getFullName());
console.log(baby2.getFullName());