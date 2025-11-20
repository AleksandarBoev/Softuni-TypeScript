export {};

let names = {
    fName: 'John',
    lName: 'Doe',
    age: 22,
    getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`
    }
};

type Names = typeof names;

let personLocation = {
    city: 'Boston',
    street: 'Nowhere street',
    number: 13,
    postalCode: 51225,
    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`
    }
};

type PersonLocation = typeof personLocation;

function createCombinedFunction(names: Names, personLocation: PersonLocation) {
    type PersonInformation = typeof names & typeof personLocation;
    return function(personInformation: PersonInformation): string {
        return `Hello, ${personInformation.getPersonInfo()}, from ${personInformation.getAddressInfo()}`
    }
}

let combinedFunction = createCombinedFunction(names, personLocation);
let combinedPerson = Object.assign({}, names, personLocation); //copies all properties from names and location and puts them in the empty object
console.log(combinedFunction(combinedPerson));