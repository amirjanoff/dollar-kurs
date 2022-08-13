var elForm = document.querySelector(".js-form");
var elInputBalance = document.querySelector(".js-input-balance");
var elSelect = document.querySelector(".js-select");
var elTextBalance = document.querySelector(".js-text-balance");

var dollar = 10940;
var euro = 11750;
var rub = 185;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elSelect.value === "usd") {
    elTextBalance.textContent = `$ ${(elInputBalance.value / dollar).toFixed(
      2
    )}`;
  } else if (elSelect.value === "rub") {
    elTextBalance.textContent = `rub ${(elInputBalance.value / rub).toFixed(
      2
    )}`;
  } else if (elSelect.value === "euro") {
    elTextBalance.textContent = `euro ${(elInputBalance.value / euro).toFixed(
      2
    )}`;
  }
});
