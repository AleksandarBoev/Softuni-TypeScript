class Person {
    constructor(private readonly firstName: string, private readonly lastName: string, private readonly age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    introduce(): string {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
    }
}

const person1 = new Person('Pesho', 'Goshov', 25);
console.log(person1.introduce());