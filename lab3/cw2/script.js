const minInput = document.getElementById("minLength");
const maxInput = document.getElementById("maxLength");
const uppercaseCheck = document.getElementById("includeUppercase");
const specialCheck = document.getElementById("includeSpecial");
const generateBtn = document.getElementById("generateBtn");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

generateBtn.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min > max) {
    alert("Podaj poprawne wartości długości");
    return;
  }

  let allowedChars = lowerChars;

  if (uppercaseCheck.checked) {
    allowedChars += upperChars;
  }

  if (specialCheck.checked) {
    allowedChars += specialChars;
  }

  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  alert(password);
});
