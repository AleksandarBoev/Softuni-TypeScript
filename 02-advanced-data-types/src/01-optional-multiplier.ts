type NumberOrString = number | string;

function multiply(num1?: NumberOrString, num2?: NumberOrString, num3?: NumberOrString): number {
    function parseNumber(num: NumberOrString): number {
        if (typeof num === 'number') {
            return num;
        } else {
            return parseInt(num);
        }
    }

    const result: number = [num1, num2, num3] //create array from all params
        .filter(e => typeof e !== 'undefined') //filter out the falsy/missing ones
        .map(e => parseNumber(e)) //parse to number
        .reduce( //reduce array to single value by multiplying all values and having initial value = 1
        (previousValue, currentValue) => previousValue * currentValue,
        1
    )

    return result;
}

console.log(multiply('3', 5, '10'));
console.log(multiply('2', '2'));
console.log(multiply(undefined, 2, 3));
console.log(multiply(7, undefined, '2'));
console.log(multiply());