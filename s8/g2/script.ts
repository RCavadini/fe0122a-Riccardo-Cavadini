let verificaSaldo = document.getElementById(
  "verifica-saldo"
) as HTMLInputElement;

class SonAccount {
  balanceInit: number;
  constructor(balanceInit: number) {
    this.balanceInit = balanceInit;
  }
  oneDeposit(versamentoUno: number): number {
    return (this.balanceInit = this.balanceInit + versamentoUno);
  }
  oneWithDraw(prelievoUno: number): number {
    return (this.balanceInit = this.balanceInit - prelievoUno);
  }
}

class MotherAccount extends SonAccount {
  constructor(balanceInit: number) {
    super(balanceInit);
  }
  twoDeposit(versamentoDue: number) {
    return this.oneDeposit(versamentoDue);
  }
  twoWithDraw(prelievoDue: number) {
    return this.oneWithDraw(prelievoDue);
  }
  addInterest(): number {
    return (this.balanceInit =
      this.balanceInit + (this.balanceInit / 100) * 10);
  }
}

let AccountFiglio = new SonAccount(0);
let AccountGenitore = new MotherAccount(0);

verificaSaldo.addEventListener("click", () => {
  const versUno = document.getElementById("versamento-uno") as HTMLInputElement;
  versUno.value;
  let depositoUno: number = Number(versUno.value);

  const prelUno = document.getElementById("prelievo-uno") as HTMLInputElement;
  prelUno.value;
  let ritiroUno: number = Number(prelUno.value);

  const versDue = document.getElementById("versamento-due") as HTMLInputElement;
  versDue.value;
  let depositoDue: number = Number(versDue.value);

  const prelDue = document.getElementById("prelievo-due") as HTMLInputElement;
  prelDue.value;
  let ritiroDue: number = Number(prelDue.value);

  const salUno = document.getElementById("saldo-uno") as HTMLInputElement;

  const salDue = document.getElementById("saldo-due") as HTMLInputElement;

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
