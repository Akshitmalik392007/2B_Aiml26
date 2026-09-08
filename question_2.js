let bank_account={
    acc_holder_name: "Akshit malik",
    acc_number: 1012234346512234,
    acc_balance: 10002323,

    deposit: function(x){
        this.acc_balance+=x;
    },
    withdraw: function(y){
            if(acc_balance<y){
                console.log("Insufficient balance : ");
            }
            else{
                this.acc_balance-=y;
            }
    },

    display: function(){
        console.log("Account holder name ", this.acc_holder_name);
        console.log("Account number : ",this.acc_number);
        console.log("Account balance : ",this.acc_balance);

    }
}
bank_account.display();
bank_account.deposit(150000);
bank_account.withdraw(50000);
console.log("After withdraw and deposit the balance will be : ", bank_account.display());
