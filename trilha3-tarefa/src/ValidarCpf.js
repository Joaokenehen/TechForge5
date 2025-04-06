"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidarCpf = ValidarCpf;
function ValidarCpf(cpf) {
    var cpfLimpo = limparCpf(cpf);
    if (!temTamanhoValido(cpfLimpo) || todosDigitosIguais(cpfLimpo)) {
        return false;
    }
    var d1 = calcularDigitoVerificador(cpfLimpo, 9, 10);
    var d2 = calcularDigitoVerificador(cpfLimpo, 10, 11);
    return cpfLimpo[9] === d1 && cpfLimpo[10] === d2;
}
function limparCpf(cpf) {
    return cpf.replace(/[^\d]+/g, "");
}
function temTamanhoValido(cpf) {
    return cpf.length === 11;
}
function todosDigitosIguais(cpf) {
    return /^(\d)\1{10}$/.test(cpf);
}
function calcularDigitoVerificador(cpf, tamanho, peso) {
    var soma = 0;
    for (var i = 0; i < tamanho; i++) {
        soma += parseInt(cpf[i]) * peso--;
    }
    var resto = soma % 11;
    var digito = resto < 2 ? 0 : 11 - resto;
    return digito.toString();
}
var cpfValido = "111.444.777-35";
var cpfInvalido = "123.456.789-00";
console.log("CPF ".concat(cpfValido, " \u00E9 v\u00E1lido? ").concat(ValidarCpf(cpfValido))); // true
console.log("CPF ".concat(cpfInvalido, " \u00E9 v\u00E1lido? ").concat(ValidarCpf(cpfInvalido))); // false
