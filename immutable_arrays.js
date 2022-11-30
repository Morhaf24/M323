const person = [
    {
        id: 1,
        name: "Morhaf",
        age: 20
    },
];
console.log(person)


const person1 = [
    ...person,
    {
        car: "Nissan GTR"
    }
];

console.log(person1)

const updatePerson = person1.map(changeCar);
function changeCar(person1) {
    if (person1.id === 1) {
        return { ...person1, car: "GT63s"}
    }
}
console.log(updatePerson)


const reducedPerson = person.filter((person) => {
    return person.id !== 2;
});

console.log(reducedPerson)


const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const total = reviews.reduce((a, g) => a + g);
const average = total / reviews.length;
const num = reviews.reduce((sum, review) => {
    if (review >= 4) {
        sum.good++;
    }
    else if (review >= 2.5) {
        sum.ok++;
    }
    else if(review >= 2) {
        sum.bad++;
    }
    return sum;
},
{
    good: 0,
    ok: 0,
    bad: 0
});
console.log(num)