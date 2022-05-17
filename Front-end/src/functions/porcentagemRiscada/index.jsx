//src/functions/porcentagemriscada
export default function porcentagemRiscada(valorReal, porcentagemDesconto) {
  const resultado = valorReal * (porcentagemDesconto / 100);
  return resultado;
}