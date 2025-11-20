function operator(param: number | string | string[], operation: 'Index' | 'Length' | 'Add', operand: number): string | number {
    const operationManager = {
        'Index': (param: number | string | string[], operand: number): string => {
            if (typeof param !== 'number') {
                const paramStringOrArray: string | string[] = param;
                return paramStringOrArray[operand];
            } else {
                throw new Error('Param should not be of type number when operation is "Index"');
            }
        },
        'Length': (param: number | string | string[], operand: number): number => {
            if (typeof param !== 'number') {
                const paramStringOrArray: string | string[] = param;
                return paramStringOrArray.length % operand;
            } else {
                throw new Error('Param should not be of type number when operation is "Length"');
            }
        },
        'Add': (param: number | string | string[], operand: number): number => {
            if (Array.isArray(param)) {
                throw new Error('Param should not be of type array when operation is "Add"');
            }

            if (typeof param === 'number') {
                return operand + param;
            } else {
                return parseInt(param) + operand;
            }
        }
    }

    return operationManager[operation](param, operand);
}

console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
console.log(operator(11, 'Add', 3));