function getValueString(response: unknown): string {
    if (response
        && typeof response === 'object'
        && 'value' in response
        && typeof response['value'] === 'string') {
        return response['value'];
    } else {
        return '-';
    }
}

console.log(getValueString({code: 200, text: 'Ok', value: [1, 2, 3]}));
console.log(getValueString({code: 301, text: 'Moved Permanently', value: 'New Url'}));
console.log(getValueString({code: 201, text: 'Created', value: {name: 'Test', age: 20}}));
console.log(getValueString({code: 201, text: 'Created', value: 'Object Created'}));
console.log(getValueString({code: 404, text: 'Not found'}));
console.log(getValueString({code: 500, text: 'Internal Server Error'}));