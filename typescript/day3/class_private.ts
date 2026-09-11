class BankAccount {
    private balance: number;

    constructor(balance: number){
        this.balance = balance
    }

    getBalance(): number{
        return this.balance;
    }

    deposit(newAmount: number ){
        this.balance += newAmount
    }
}

const account = new BankAccount(100000);
console.log(account.getBalance());
account.deposit(200000);
console.log(account.getBalance());


