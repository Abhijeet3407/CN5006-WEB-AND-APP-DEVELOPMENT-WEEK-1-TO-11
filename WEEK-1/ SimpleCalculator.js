function calculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) return num1 / num2;
            else return "Cannot divide by zero";
    }
}

console.log(calculator(10, 5, 'add'));       // Addition
console.log(calculator(10, 5, 'subtract'));  // Subtraction
console.log(calculator(10, 5, 'multiply'));  // Multiplication
console.log(calculator(10, 5, 'divide'));    // Division
