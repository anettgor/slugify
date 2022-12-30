const slug = document.querySelector("#slug");
const string = document.querySelector("#string");
const btn = document.querySelector("#copy");
const https = document.querySelector("#https");

function updateValue(e) {
  string.textContent = e.target.value
    .trim()
    .normalize("NFD")
    .toLowerCase()
    .replace(/[^a-z0-9- ]/g, "")
    .replace(/  +/g, " ")
    .replaceAll(" ", "-");
  https.textContent = `https://www.wojas.pl/${string.textContent}`;
}

slug.addEventListener("input", updateValue);
