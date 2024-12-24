const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);
    if (number > 0) {
        console.log("The number is positive");
    } else if (number === 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is negative");
    }

    // Close the readline interface
    rl.close();
});
