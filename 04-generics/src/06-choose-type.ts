//What happens below: Create a type, which has 2 generics in it. The first one is an object. The second one is of type, the same as the keys of the object.
//After that, we
type Choose<T, K extends keyof T> = {[Key in K]: T[Key]};

type test = {
    name: string,
    age: number,
    test:() => string;
}

type ExtractedAll = Choose<test, 'name' | 'age'>;
type ExtractedName = Choose<test, 'name'>;
type ExtractedAge = Choose<test, 'age'>;


const testObj1: ExtractedAll = {
    name: 'Sasho',
    age: 30
}

const testObj2: ExtractedName = {
    name: 'Sasho',
    age: 30 //highlighted in red
}

const testObj3: ExtractedAge = {
    name: 'Sasho', //highlighted in red
    age: 30
}
