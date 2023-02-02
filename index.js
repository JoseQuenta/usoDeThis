const user = {
    name: 'Leo',
    lastname: 'Dan',
    age: 30,
    showFullName: function () {
        return this.name + " " + this.lastname
    }

}
console.log(user.showFullName());


const account = {
    number: 1234,
    amount: 100,
    deposit(quantity){
        this.amount = this.amount + quantity

    },
    withdraw(quantity){
        this.amount = this.amount - quantity
    }
}

account.deposit(250);
account.deposit(700);
account.deposit(200);
console.log(account.amount);
account.withdraw(350);
console.log(account.amount);
account.withdraw(1);
console.log(account.amount);


console.log('"hello world".toUpperCase');