class User {
    private static readonly USERNAME_MIN_LENGTH: number = 3;

    private _userName: string;

    constructor(userName: string) {
        this.validateUsername(userName);
        this._userName = userName;
    }

    get username(): string {
        return this._userName;
    }

    set username(username: string) {
        this.validateUsername(username);
        this._userName = username;
    }

    private validateUsername(username: string): void {
        if (username.length < User.USERNAME_MIN_LENGTH) {
            throw new Error(`Username should be at least ${User.USERNAME_MIN_LENGTH} characters long!`);
        }
    }
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);

const user2 = new User("jo");

const user3 = new User("Martin");
user.username = "Do";