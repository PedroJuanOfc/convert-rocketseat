//Cotação de moedas do dia
const USD = 5.34;
const EUR = 6.26;
const GBP = 7.18;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para receber apenas números
amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      converterCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      converterCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      converterCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda
function converterCurrency(amount, price, symbol) {}
