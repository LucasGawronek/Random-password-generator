const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let passwordLength = 15;
let pass1 = "";
let pass2 = "";

function passwordGen() {
  for (i = 0; i < passwordLength; i++) {
    pass1 += characters[Math.floor(Math.random() * characters.length)];
    pass2 += characters[Math.floor(Math.random() * characters.length)];
  }
  passFill();
}
function passFill() {
  password1El.innerText = pass1;
  password2El.innerText = pass2;

  if (pass1 && pass2) {
    pass1 = "";
    pass2 = "";
  }
}

function passCopy() {
  navigator.clipboard.writeText(password1El.innerText);

  alert("Password copied");
}

function passCopy2() {
  navigator.clipboard.writeText(password2El.innerText);

  alert("Password copied");
}
