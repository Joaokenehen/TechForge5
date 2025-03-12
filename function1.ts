interface ConsumoEnergia {
  consumoPorKwh: number;
  tarifaKwh: number;
  bandeiraTarifaria: string;
  percentualImposto: number;
}

function calcularValorBase(consumo: ConsumoEnergia): number {
  descontoOuAcrescimoSobreConsumo;
  return consumo.consumoPorKwh * consumo.tarifaKwh;
}

function ajusteBandeiraTarifaria(consumo: ConsumoEnergia): number {
  let acrescimoBandeira = 0;

  if (consumo.bandeiraTarifaria === "amarela") {
    return (acrescimoBandeira = 0.02 * consumo.consumoPorKwh);
  } else if (consumo.bandeiraTarifaria == "vermelha") {
    return (acrescimoBandeira = 0.05 * consumo.consumoPorKwh);
  }

  return acrescimoBandeira;
}

function impostoSobreTotal(consumo: ConsumoEnergia): number {
  return calcularValorBase(consumo) * (consumo.percentualImposto / 100);
}

function descontoOuAcrescimoSobreConsumo(consumo: ConsumoEnergia): number {
  if (consumo.consumoPorKwh <= 100) {
    console.log("O valor tera um desconto de 5% sobre o total");
    return consumo.consumoPorKwh * 0.95;
  } else if (consumo.consumoPorKwh >= 300) {
    console.log("O valor teve um acrescimo de 10% em seu total");
    return consumo.consumoPorKwh * 1.1;
  } else if (consumo.consumoPorKwh > 100 && consumo.consumoPorKwh <= 300) {
    console.log("O valor não teve alteração");
    return consumo.consumoPorKwh;
  } else console.log("Valor não correspondente");
  return consumo.consumoPorKwh;
}

const meuConsumo: ConsumoEnergia = {
  consumoPorKwh: 300,
  tarifaKwh: 0.8,
  bandeiraTarifaria: "vermelha",
  percentualImposto: 15,
};

const valorBaseDeConsumo = calcularValorBase(meuConsumo);
console.log(
  `O valor base da sua conta de energia é ${valorBaseDeConsumo.toFixed(2)}`
);

const ajusteDaBandeira = ajusteBandeiraTarifaria(meuConsumo);
console.log(
  `O valor com o ajuste da bandeira tarifaria é ${ajusteDaBandeira.toFixed(2)}`
);

const valorImpostoSobreTotal = impostoSobreTotal(meuConsumo);
console.log(
  `O valor do imposto sobre o valor base ${valorImpostoSobreTotal.toFixed(2)}`
);

const descontoOuAcrescimo = descontoOuAcrescimoSobreConsumo(meuConsumo);
console.log(`O novo valor sera de ${descontoOuAcrescimo}`);
