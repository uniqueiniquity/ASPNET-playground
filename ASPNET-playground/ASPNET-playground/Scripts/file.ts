/** */
class BankAccount {
    balances = 0;
    aaaa: number;
    private blah: string = 5;
    constructor() {
        this.aaaa = 3;
    }
    deposit(credit: number) {
        this.balances += credit;
        if (true) {

        }
        return this.balances;
    }
}