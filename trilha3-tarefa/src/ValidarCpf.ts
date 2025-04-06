export function ValidarCpf(cpf: string): boolean {
  const cpfLimpo = limparCpf(cpf);

  if (!temTamanhoValido(cpfLimpo) || todosDigitosIguais(cpfLimpo)) {
    return false;
  }

  const d1 = calcularDigitoVerificador(cpfLimpo, 9, 10);
  const d2 = calcularDigitoVerificador(cpfLimpo, 10, 11);

  return cpfLimpo[9] === d1 && cpfLimpo[10] === d2;
}

function limparCpf(cpf: string): string {
  return cpf.replace(/[^\d]+/g, "");
}

function temTamanhoValido(cpf: string): boolean {
  return cpf.length === 11;
}

function todosDigitosIguais(cpf: string): boolean {
  return /^(\d)\1{10}$/.test(cpf);
}

function calcularDigitoVerificador(
  cpf: string,
  tamanho: number,
  peso: number
): string {
  let soma = 0;

  for (let i = 0; i < tamanho; i++) {
    soma += parseInt(cpf[i]) * peso--;
  }

  const resto = soma % 11;
  const digito = resto < 2 ? 0 : 11 - resto;

  return digito.toString();
}

const cpfValido = "111.444.777-35";
const cpfInvalido = "123.456.789-00";

console.log(`CPF ${cpfValido} é válido? ${ValidarCpf(cpfValido)}`); // true
console.log(`CPF ${cpfInvalido} é válido? ${ValidarCpf(cpfInvalido)}`); // false
