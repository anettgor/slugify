const slug = document.querySelector("#slug");
const string = document.querySelector("#string");
const btn = document.querySelector("#copy");
const btnFull = document.querySelector("#copy-full");
const https = document.querySelector("#https");
const resultString = document.querySelector("#result-string");
const resultFullString = document.querySelector("#result-full-string");
const btnText = "Copy";

function updateValue(e) {
  resultString.textContent = e.target.value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9- ]/g, "")
    .replace(/  +/g, " ")
    .replaceAll(" ", "-");
  if (resultString.textContent !== "") {
    resultFullString.textContent = `https://www.wojas.pl/${resultString.textContent}`;
  }
}

slug.addEventListener("input", updateValue);

function copyUrl(eee, yyy, result) {
  if (yyy.textContent !== "") {
    navigator.clipboard.writeText(result.textContent);
    eee.classList.add("copied");
    eee.textContent = "Copied!";

    setTimeout(() => {
      eee.classList.remove("copied");
      eee.textContent = btnText;
    }, 2000);
  } else {
    alert("Enter some text to copy");
  }
}

btn.addEventListener("click", function () {
  copyUrl(btn, string, resultString);
});
btnFull.addEventListener("click", function () {
  copyUrl(btnFull, https, resultFullString);
});
