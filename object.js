const person = {
  id: 2,
  gender: "mail",
};
const student = {
  name: "ravi",
  email: "ravi11@yopmail.com",
};

let newObject = {
  ...person,
  ...student,
};

console.log(newObject);
