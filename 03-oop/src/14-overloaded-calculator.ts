class Calculator {
    calculate(
        operationName: 'power' | 'log' | 'add' | 'subtract' | 'multiply' | 'divide',
        num1: number,
        num2: number
    ): number;

    calculate(
        operationName: 'power' | 'log' | 'add' | 'subtract' | 'multiply' | 'divide',
        num1: number,
        num2: number,
        num3?: number,
        num4?: number
    ): number;

    calculate(operationName: 'power' | 'log' | 'add' | 'subtract' | 'multiply' | 'divide',
              num1: number,
              num2: number,
              num3?: number,
              num4?: number): number {
        if (operationName === 'power' || operationName === 'log') {
            if (num3) {
                throw new Error('Power and log operations can work only with 2 parameters!')
            }

            if (operationName === 'power') {
                return Math.pow(num1, num2);
            } else {
                return Math.log(num1) / Math.log(num2);
            }
        } else {
            const numbers = [num1, num2, num3, num4].filter(num => typeof num !== 'undefined');
            const operation = this.getOperation(operationName);
            const operationStartingValue = this.getOperationStartingValue(operationName);
            if (operationStartingValue !== null) {
                return numbers.reduce(operation, operationStartingValue);
            } else {
                return numbers.reduce(operation);
            }
        }
    }

    private getOperation(operationName: string) {
        if (operationName === 'add') {
            return (num1: number, num2: number): number => {
                return num1 + num2;
            };
        } else if (operationName === 'subtract') {
            return (num1: number, num2: number): number => {
                return num1 - num2;
            };
        } else if (operationName === 'multiply') {
            return (num1: number, num2: number): number => {
                return num1 * num2;
            };
        } else if (operationName === 'divide') {
            return (num1: number, num2: number): number => {
                return num1 / num2;
            };
        }
    }

    private getOperationStartingValue(operationName: string): number {
        switch (operationName) {
            case 'add':
                return 0;
            case 'subtract':
                return null;
            case 'multiply':
                return 1;
            case 'divide':
                return null;
        }
    }
}

const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));