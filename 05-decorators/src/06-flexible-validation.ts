class User {
    //"!" is needed, cuz TS does not recognize the setter in the constructor
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name; //this uses the setter
        this.age = age;
        this.password = password;
    }

    @MinLength(3)
    set name(val: string) {
        this._name = val;
    }

    @MinMaxValue(1, 100)
    set age(val: number) {
        this._age = val;
    }

    @MatchesRegex(/^[a-zA-Z0-9]+$/g)
    set password(val: string) {
        this._password = val;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

function MinLength(minLength: number) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.set;
        descriptor.set = function (value: string): void {
            if (value.length < minLength) {
                throw new Error(`Value: "${value}" has length ${value.length} lower than permitted ${minLength}!`);
            }

            original?.call(this, value);
        };
        return descriptor;
    }
}

function MinMaxValue(minValue: number, maxValue: number) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.set;
        descriptor.set = function (value: number): void {
            if (value < minValue || value > maxValue) {
                throw new Error(`Value: "${value}" should be between ${minValue} and ${maxValue}!`);
            }

            original?.call(this, value);
        };
        return descriptor;
    }
}

function MatchesRegex(regex: RegExp) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.set;
        descriptor.set = function (value: string): void {
            if (!regex.test(value)) {
                throw new Error(`Value ${value} does NOT match pattern ${regex}!`);
            }
            original?.call(this, value);
        };
        return descriptor;
    }
}

// minLength = 1
// min = 1, max = 150
// regex = /^[a-zA-Z0-9!@]+$/g

// let user = new User('John', 130, 'hardPassword12');
// let user2 = new User('John', 30, '!test');
// let user3 = new User('John', 25, '@werty');
// let user4 = new User('Jo', 20, 'password123');
//=======================================================
// minLength = 3
// min = 1, max = 100
// regex = /^[a-zA-Z0-9]+$/g

// let user = new User('John', 130, 'hardPassword12');
// let user2 = new User('John', 30, '!test');
// let user3 = new User('John', 25, '@werty');
let user4 = new User('Jo', 20, 'password123');
