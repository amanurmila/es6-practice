const person = {
    name: 'Jack William',
    age: 17,
    job: 'Facebooker',
    gfName: 'Emma Watson',
    address: 'Kochu Khet',
    phoneNumber: '01717112211',
    friends: ['Tom Hanks', 'Tom Cruise', 'Tom Yern']
  };

  const { job, gfName } = person;
  const { address } = person;

  console.log(job, gfName);
  console.log(address);




  const numbers = [12, 13, 14, 15, 16, 17, 18];
  const [firstNum, secondNumber, ...remaining] = numbers;
  console.log(firstNum, remaining);




  const complexObject = {
    name: 'Aman',
    age: 23,
    info: {
        thikana: 'Goal Para',
        leader: 'Urmi'
    }
  }

const { leader } = complexObject.info;

console.log(leader);