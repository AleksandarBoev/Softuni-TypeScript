function getGreeting(inputData: [string, number]): string {
    return `Hello, my name is ${inputData[0]} and my age is ${inputData[1]}`;
}

console.log(getGreeting(['Ivan', 20]));
console.log(getGreeting(['Joro', 30]));
// console.log(getGreeting(['Ivan', 20, 'Ivanov')); //compilation failure for this and the others
// console.log(getGreeting(['Joro', '25']));
// console.log(getGreeting([]));