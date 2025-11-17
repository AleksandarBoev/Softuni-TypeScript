function sumOfNumbersIsEven(num1: number, num2: number, num3: number): boolean {
    return (num1 + num2 + num3) % 2 === 0;
}

console.log(sumOfNumbersIsEven(1, 2, 3))
console.log(sumOfNumbersIsEven(2, 2, 3))
