import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Victor", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteVictor = new ContaCorrente(1001, cliente1);
const contaCorrenteAlice = new ContaCorrente(1001, cliente2);


console.log(contaCorrenteVictor, contaCorrenteAlice);

console.log(ContaCorrente.numeroDeContas);

