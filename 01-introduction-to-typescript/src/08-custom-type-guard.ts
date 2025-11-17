function isStringArray(parameter: unknown): parameter is string[] {
    return Array.isArray(parameter) //looks like it also check for null/undefined
        && parameter.length > 0
        && parameter.every(element => typeof element === 'string');
}

console.log(isStringArray({}));
console.log(isStringArray({test: 'one'}));
console.log(isStringArray([]));
console.log(isStringArray(undefined));
console.log(isStringArray(null));
console.log(isStringArray([12, 13]));
console.log(isStringArray(['test', 123]));
console.log(isStringArray(['a', 'b', 'c']));