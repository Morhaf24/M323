const person = {
    name: "Morhaf",
    age: 19,
    footBallClub: "Real Madrid"
};

const person1 = {
    ...person,
    car: "GT63s"
};


const person2 = {
    ...person1,
    age: person1.age + 1
};

const { name, footBallClub, car } = person2

const Person3 = {
    name: name,
    footBallClub: footBallClub,
    car: car,
};

console.log(Person3)