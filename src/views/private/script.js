
const params = new URLSearchParams(window.location.search);
const precoUnitario = parseFloat(params.get("preco")) || 0;
document.getElementById("titulo").textContent = "Viagem para " + params.get("destino");
document.getElementById("descricao").textContent = "Desfrute dessa linda viagem para  " + params.get("destino") + " onde poderá descansar e aproveitar a beleza e cultura deste incrível paraíso. Aproveite nosso pacote e desfrute da tranquilidade de viajar sem se preocupar. Você poderá contar com hospedagem, transporte e refeição all-inclusive. Disponibilizamos guias durante todo o percurso.";
document.getElementById("data").textContent = "Data: " + params.get("data");
document.getElementById("preco").textContent = "Preço: R$ " + params.get("preco");

function atualizarValorTotal() {
  const quantidade = parseInt(document.getElementById("quantidade").value) || 1;
  const valorTotal = precoUnitario * quantidade;
  document.getElementById("valorTotal").textContent = `R$ ${valorTotal.toFixed(2)}`;
}

document.getElementById("quantidade").addEventListener("input", atualizarValorTotal);

atualizarValorTotal();
