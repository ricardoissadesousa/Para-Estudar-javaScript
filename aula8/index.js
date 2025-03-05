/*Luiz Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otavio nasceu em 1980
**/
const nome = 'Ricardo';
const sobreNome = 'Issa de Sousa';
const idade = 22;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;



imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

// template strings
 
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

