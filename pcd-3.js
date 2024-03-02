class member{
    constructor(mName, mAge, mHouse){
        this.Name = mName;
        this.Age = mAge;
        this.House = mHouse;
        this.Country = 'Bangladesh';
    }
}

const member1 = new member('Aman', 23, 'Molla Bari');
const member2 = new member('Urmi', 18, 'Molla Bari');
const member3 = new member('Shoel', 17, 'Sordar Bari');
const member4 = new member('Saddam', 29, 'Biswas Bari');

console.log(member1, member2, member3, member4);