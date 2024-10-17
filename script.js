function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const password = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

let current = generatePassword();
password.innerText = current;

generateBtn.addEventListener("click", () => {
  current = generatePassword();
  password.innerText = current;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(current);
});
