export {};

@addCreatedOn
class User {
    constructor(public name: string, public age: number) {
    }

    displayUserInfo() {
        console.log(`${this.name}, Age: ${this.age}`);
    }
}

function addCreatedOn<T extends { new (...args: any[]): {} }>(constructor: T) {
    let newClass = class extends constructor {
        createdOn = new Date();
    };

    return newClass;
}

const user1 = new User("John Doe", 30);
user1.displayUserInfo()
console.log(user1);
console.log((user1 as any).createdOn);

/*
Output:
John Doe, Age: 30
newClass {
  name: 'John Doe',
  age: 30,
  createdOn: 2025-12-12T17:57:30.557Z
}
2025-12-12T17:57:30.557Z
 */

