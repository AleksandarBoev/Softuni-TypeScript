export {};

class MockAuthrizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') {
    }

    canViewData(property: string): boolean {
        switch (this.userRole) {
            case 'Admin':
                return true;
            case 'PersonalDataAdministrator':
                return ['name', 'age'].includes(property);
            default:
                return false;
        }
    }
}

function Authorize(authorizationService: MockAuthrizationService) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalGetter = descriptor.get;
        descriptor.get = function (): any {
            if (!authorizationService.canViewData(key)) { //key is the name of the method, which matches the field name
                throw new Error("You are not authorized to view this information.")
            }

            return originalGetter?.call(this);
        }

        return descriptor;
    }
}

// let mockAuthorizationService = new MockAuthrizationService('Admin');
let mockAuthorizationService = new MockAuthrizationService('PersonalDataAdministrator');

class User {
    constructor(private _name: string, private _age: number, private _creditCardNumber: string) {
    }

    @Authorize(mockAuthorizationService)
    get name(): string {
        return this._name;
    }

    @Authorize(mockAuthorizationService)
    get age(): number {
        return this._age;
    }

    @Authorize(mockAuthorizationService)
    get creditCardNumber(): string {
        return this._creditCardNumber;
    }
}


const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);



