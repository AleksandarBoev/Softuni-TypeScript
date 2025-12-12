class Person {
    constructor(public fName: string, public lName: string) {
    }

    @logMethodInfo
    public static getFullName(fName: string, lName: string): string {
        return `${fName} ${lName}`;
    }
}

function logMethodInfo(target: Object, key: string, descriptor: PropertyDescriptor) {
    const originalFunc = descriptor.value; //save the OG method/function

    descriptor.value = function (...args: any[]): any { //overwrite the OG method/function
        console.log(`Function ${key} called with arguments: `, args.join(", "));
        return originalFunc.apply(this, args); //use the old function
    };

    return descriptor;
}

let person = new Person('John', 'Does');
Person.getFullName(person.fName, person.lName)
Person.getFullName('Benny', 'Tres');