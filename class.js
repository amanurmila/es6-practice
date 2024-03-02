class student{
    constructor(sId, sName, sAge){
        this.id = sId;
        this.name = sName;
        this.age =sAge;
        this.house = 'Molla Bari';
    }
}

const student1 = new student(1, 'Amanullah Belaly', 23);
const student2 = new student(2, 'Mosammad Urmi Belaly', 18);
const student3 = new student(3, 'Israt Jahan Tanisha', 5);

console.log(student1, student2, student3);