export default function formataDinheiro(dinheiro) {
  const realBrasileiro = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(dinheiro)

  return realBrasileiro;
}