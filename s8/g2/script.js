let verificaSaldo = document.getElementById("verifica-saldo");
class SonAccount {
    constructor(balanceInit) {
        this.balanceInit = balanceInit;
    }
    oneDeposit(versamentoUno) {
        return (this.balanceInit = this.balanceInit + versamentoUno);
    }
    oneWithDraw(prelievoUno) {
        return (this.balanceInit = this.balanceInit - prelievoUno);
    }
}
class MotherAccount extends SonAccount {
    constructor(balanceInit) {
        super(balanceInit);
    }
    twoDeposit(versamentoDue) {
        return this.oneDeposit(versamentoDue);
    }
    twoWithDraw(prelievoDue) {
        return this.oneWithDraw(prelievoDue);
    }
    addInterest() {
        return (this.balanceInit =
            this.balanceInit + (this.balanceInit / 100) * 10);
    }
}
let AccountFiglio = new SonAccount(0);
let AccountGenitore = new MotherAccount(0);
verificaSaldo.addEventListener("click", () => {
    const versUno = document.getElementById("versamento-uno");
    versUno.value;
    let depositoUno = Number(versUno.value);
    const prelUno = document.getElementById("prelievo-uno");
    prelUno.value;
    let ritiroUno = Number(prelUno.value);
    const versDue = document.getElementById("versamento-due");
    versDue.value;
    let depositoDue = Number(versDue.value);
    const prelDue = document.getElementById("prelievo-due");
    prelDue.value;
    let ritiroDue = Number(prelDue.value);
    const salUno = document.getElementById("saldo-uno");
    const salDue = document.getElementById("saldo-due");
    AccountFiglio.oneDeposit(depositoUno);
    AccountFiglio.oneWithDraw(ritiroUno);
    AccountGenitore.twoDeposit(depositoDue);
    AccountGenitore.twoWithDraw(ritiroDue);
    AccountGenitore.addInterest();
    salUno.value = AccountFiglio.balanceInit.toString();
    salDue.value = AccountGenitore.balanceInit.toString();
    console.log(AccountFiglio.balanceInit);
    console.log(AccountGenitore.balanceInit);
});
