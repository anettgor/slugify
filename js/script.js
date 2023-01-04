const slug = document.querySelector("#slug");
const string = document.querySelector("#string");
const btn = document.querySelector("#copy");
const btnFull = document.querySelector("#copy-full");
const https = document.querySelector("#https");
const resultString = document.querySelector("#result-string");
const resultFullString = document.querySelector("#result-full-string");
const btnText = "Copy";
const clear = document.querySelector(".clear");

function updateValue(e) {
  resultString.textContent = e.target.value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replaceAll("ł", "l")
    .replace(/[^a-z0-9- ]/g, "")
    .replace(/  +/g, " ")
    .replaceAll(" ", "-");
  resultFullString.textContent = `https://www.wojas.pl/${resultString.textContent}`;
}

slug.addEventListener("input", updateValue);

function copyUrl(buttons, texts, result) {
  if (resultString.textContent !== "") {
    navigator.clipboard.writeText(result.textContent);
    buttons.classList.add("copied");
    buttons.textContent = "Copied!";

    setTimeout(() => {
      buttons.classList.remove("copied");
      buttons.textContent = btnText;
    }, 2000);
  } else {
    alert("Enter some text to copy");
  }
}

function clearAll() {
  slug.value = "";
  resultString.textContent = "";
  resultFullString.textContent = "";
}

clear.addEventListener("click", function () {
  clearAll();
});

btn.addEventListener("click", function () {
  copyUrl(btn, string, resultString);
});
btnFull.addEventListener("click", function () {
  copyUrl(btnFull, https, resultFullString);
});
