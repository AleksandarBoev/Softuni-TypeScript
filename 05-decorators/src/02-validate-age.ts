class Age {
    private _age!: number;

    constructor(age: number) {
        this.age = age;
    }

    @validateAge
    set age(val: number) {
        this._age = val;
    }

    get age() {
        return this._age;
    }
}

function validateAge(target: any, key: string, descriptor: PropertyDescriptor) {
    let originalSet = descriptor.set;
    descriptor.set = function (...args: any[]) {
        if (originalSet) {
            if (typeof args[0] === 'number' && (args[0] < 1 || args[0] > 200)) {
                throw new Error('Age must be between 1 and 200')
            }

            originalSet.call(this, args[0]);
        }
    }
}

let ageVal = new Age(10);
ageVal.age = -10;
/*
Error: Age must be between 1 and 200
    at Age.descriptor.set (D:\Programming\Softuni-TypeScript\05-decorators\src\02-validate-age.ts:23:23)
    at <anonymous> (D:\Programming\Softuni-TypeScript\05-decorators\src\02-validate-age.ts:32:8)
 */
