const randomNumber = Math.random();
console.log(randomNumber);

if (randomNumber < 0.25) {
    console.log("Less than 0.25");
}
else if (randomNumber < 0.5) {
    console.log("Less than 0.5");
}
else {
    console.log("More tham 0.5");
}


const intRamdomNumber = Math.floor(Math.random() * 5)
console.log(intRamdomNumber)

switch (intRandomNumber) {
    case 1:
        console.log("Number is 1")
        break;
    case 3:
        console.log("Number is 3")
        break;
    default:
        console.log("Number is not 1 or 3")
        break;
}