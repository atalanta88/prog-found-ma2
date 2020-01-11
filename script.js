// question 1

var petArray = ["cat", "cow", "dog"];

// question 2

console.log(petArray[1]);

// question 3

petArray.push("sheep");

// question 4

console.log(petArray.length);

// question 5

var catObject = {
    name: "Jumbo",
    colour: "black",
    age: 3
}

// question 6

console.log(catObject.colour)

// question 7

var catArray = [
    {
    name: "Jumbo",
    colour: "black",
    age: 3
    }
];

// question 8

for(var i = 0; i < catArray.length; i++) {

    console.log(catArray[i]);
}
console.log(catArray.length)

// question 9

function logToConsole(breed) {
    console.log("The name of the animal is " + breed);
}


// question 10

logToConsole("donkey");