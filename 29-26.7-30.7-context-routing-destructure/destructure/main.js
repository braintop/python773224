console.log("---------------object/dictionary destructure")
const person = { name: 'Dana', age: 30 };
// const name = person.name;
// const age = person.age;
const { age, name } = person;
console.log(person)
console.log(name)
console.log(age)
const user = {
    username: 'noa',
    email: 'noa@example.com'
};
const { username, email } = user;
console.log(username); // 'noa'
console.log(email);    // 'noa@example.com'


console.log("---------------array destructure according to index--------------")


const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor] = colors;

console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'
