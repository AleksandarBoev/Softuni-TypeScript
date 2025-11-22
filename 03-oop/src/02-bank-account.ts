class BankAccount {
    constructor(private balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (!this.amountIsValidNumber(amount)) {
            console.error('Amount validation failed for deposit');
        } else {
            this.balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (!this.amountIsValidNumber(amount)) {
            console.error('Amount validation failed for withdraw');
        } else {
            if (amount > this.balance) {
                console.error('Amount is bigger than balance');
            } else {
                this.balance -= amount;
            }
        }
    }

    getBalance(): number {
        return this.balance;
    }

    private amountIsValidNumber(amount: number) {
        return amount > 0;
    }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());

const account2 = new BankAccount(20);
account2.withdraw(30);
console.log(account2.getBalance());