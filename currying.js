const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];
  
const studentFeedback = [
    'Nice Job Joe, you got an b',
    'Excellent Job Jen, you got an a',
    'Well done Steph, you got an c',
    'What happened Allen, you got an d',
    'Not good Gina, you got an f',
  ]; 

const greet = (studentFeedback) => {
  function greetName(studentGrades) {
      if (studentGrades >= 90) return `Excellent Job Jen, you got an a
      ${studentGrades.name}`;
      if (studentGrades >= 80) return `Nice Job Joe, you got an b
      ${studentGrades.name}`;
      if (studentGrades >= 70) return `Well done Steph, you got an c
      ${studentGrades.name}`;
      if (studentGrades >= 60) return `What happend Allen, you got an d
      ${studentGrades.name}`;
      return `Not good Gine, you got an f ${studentGrades.name}`;
  }
  return greetName;
};

console.log(studentGrades.map(greet(studentFeedback)));
  

const req = require('./rambda.min.js');

const nameArray = ["Morhaf", "Mouayad", "Anna"];

const halloFunction = req.curry((prefix, item) => prefix + item);
const halloName = req.map(halloFunction('Hallo, geht es dir gut? ' ),
nameArray);

console.log(halloName);