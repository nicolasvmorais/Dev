const botao = document.getElementById("button");
const inputDolar = document.getElementById("dolar")
const dolar = 5.70;

botao.addEventListener("click", function () {
  const inputInserido = document.getElementById("inputInserir").value;
  const valorDolar = inputInserido*dolar
  inputDolar.value = valorDolar + " Dólares"
  return console.log(valorDolar)
});


