/*
let friends = ["edvin", "jakob", "rickard", "tommy", "sigurd"]
let last = friends[friends.length - 1];
console.log(last)
*/


/*function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number")
            sum += array[i]
    }
    return sum
}
let sum = sumOfArray([1, 2, 10, 4, 5, 6, "edvin"])
console.log(sum)
*/

//vi behöver definiera array
// vi behöver iterera över antal argument
//i representerar varje siffra
//varje siffra ska tilldelas de föregående två siffrorna adderat

/*
function fibonacci(n) {
    let output = [];
    a = i - 1
    b = i - 2
    let i = 0
    for (let i = 0; i < n.length; i++) {
        number = a + b
        number += n[i]
    }
    return output;
}

let answer = fibonacci(5);
console.log(answer);
*/

function fibonacci(n) {
    let output = [];
    if (n === 1) {
        output = [0]
    } else if (n === 2) {
        output = [0, 1]
    } else {
        output = [0, 1]
        for (let i = 2; i < n; i++) {
            let lastValue = output[output.length - 1]
            let secondToLastValue = output[output.length - 2]
            let newValue = lastValue + secondToLastValue;
            output.push(newValue)
        }
    }

    // Slut
    return output;
}
let answer = fibonacci(30); // [0, 1, 1, 2]
console.log(answer);