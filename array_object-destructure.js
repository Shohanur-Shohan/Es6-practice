//With Object
const person = { Name: 'shohan', age: 20, roll: 45654646 };

const pName = person.Name;//method 1
const pAge = person.age;
const pRoll = person.roll;
console.log(pName, pAge, pRoll);

const { Name, age } = person; //method 2
// const { Name } = person;
console.log( Name, age );



// with Array
const student = ['shohan', 'Limon', 'tuhin', 'sporsho'];

const [firstBoy , secondBoy, ...backbenchers] = student;
console.log(firstBoy , secondBoy );
console.log( backbenchers );


// oject 2nd
const complexObj = {
    name: 'Shohan',
    info: {
        roll: '457141',
        dept: 'CSE'
    }
}
const { roll, dept } = complexObj.info;
console.log(roll, dept);