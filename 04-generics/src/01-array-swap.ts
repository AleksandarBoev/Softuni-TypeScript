function swap<T>(array1: T[], array1Index: number, array2: T[], array2Index) {
    const tempElement = array1[array1Index];
    array1[array1Index] = array2[array2Index];
    array2[array2Index] = tempElement;
}

let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap<string>(a, 0, b, 2);
console.log(a);
console.log(b);

let c = [20, 30 , 40];
let d = [1, 2, 3, 4, 5];
swap<number>(c, 0, d, 2);
console.log(c)
console.log(d)