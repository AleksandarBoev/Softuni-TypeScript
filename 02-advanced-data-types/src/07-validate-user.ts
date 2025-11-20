export {};

//Provided by task and has to be used later:
type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function isValidUser(input: unknown): input is User {
    if (typeof input === 'object' && input) {

        function hasValidId(input: object): boolean {
            if ('id' in input) {
                const id = input['id']
                if (typeof id === 'number') {
                    return id > 100;
                } else if (typeof id === 'string') {
                    return id.length === 14;
                }
            }

            return false; //if true has not been returned above, then this will be used
        }

        function hasValidUsername(input: object): boolean {
            if ('username' in input) {
                if (typeof input['username'] === 'string') {
                    return input['username'].length >= 5 && input['username'].length <= 10;
                }
            }

            return false;
        }

        function hasValidPasswordHash(input: object): boolean {
            if ('passwordHash' in input) {
                const passwordHash = input['passwordHash']
                if (typeof passwordHash === 'string') {
                    return passwordHash.length === 20;
                } else if (Array.isArray(passwordHash)) {
                    return passwordHash.length === 4
                        && passwordHash.every(el => typeof el === 'string' && el.length === 8);
                }
            }

            return false;
        }

        function hasValidStatus(input: object): boolean {
            if ('status' in input) {
                if (typeof input['status'] === 'string') {
                    return input['status'] === 'Locked' || input['status'] === 'Unlocked'
                }
            }

            return false;
        }

        return hasValidId(input)
            && hasValidUsername(input)
            && hasValidPasswordHash(input)
            && hasValidStatus(input);
    } else {
        return false;
    }
}

console.log(isValidUser({ id1: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));
console.log(isValidUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }));
console.log(isValidUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status:'Deleted', email: 'something' }));
console.log(isValidUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567','98765432'], status: 'Locked', email: 'something' }));
console.log(isValidUser({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444','12-34-56'], status: 'Unlocked' }));
console.log(isValidUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' } ));