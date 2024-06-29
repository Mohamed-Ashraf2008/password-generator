let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let characters = letters.concat(numbers, symbols);
console.log(characters);

let historyEl = document.getElementById("history-el");
function showHistory() {
    historyEl.classList.add("open-history");
}
let btnEL = document.getElementById("btn-el");
let password1EL = document.getElementById("password1-el");
let password2EL = document.getElementById("password2-el");
let input = document.getElementById("length-el");
let passwordLength = input.value;
let popup = document.getElementById("popup-el");
let includeNumbersEl = document.getElementById("include-numbers-el");
let includeNumbers;
let includeSymbolsEl = document.getElementById("include-symbols-el");
let includeSymbols;
let includelettersEl = document.getElementById("include-letters-el");
let includeletters;
let myPassword = JSON.parse(localStorage.getItem("myPassword")) || []; // Retrieve passwords from local storage or initialize as empty array
let olEl = document.getElementById("passwords");

function reset() {
    input.value = 4;
    includeNumbersEl.checked = true;
    includeSymbolsEl.checked = true;
    includelettersEl.checked = true;
}

function sumit() {
    passwordLength = input.value;
    includeNumbers = includeNumbersEl.checked;
    includeSymbols = includeSymbolsEl.checked;
    includeletters = includelettersEl.checked;
    popup.classList.remove("open-popup");
    if (includeNumbers === false && includeSymbols === false && includeletters === true) {
        characters = letters;
    } else if (includeNumbers === false && includeSymbols === true && includeletters === true) {
        characters = letters.concat(symbols);
    } else if (includeNumbers === true && includeSymbols === false && includeletters === true) {
        characters = letters.concat(numbers);
    } else if (includeNumbers === true && includeSymbols === true && includeletters === true) {
        characters = letters.concat(numbers, symbols);
    } else if (includeNumbers === true && includeSymbols === false && includeletters === false) {
        characters = numbers;
    } else if (includeNumbers === false && includeSymbols === true && includeletters === false) {
        characters = symbols;
    } else if (includeNumbers === true && includeSymbols === true && includeletters === false) {
        characters = numbers.concat(symbols);
    } else if (includeNumbers === false && includeSymbols === false && includeletters === false) {
        characters = []
    }
}

function random() {
    let i = (Math.floor(Math.random() * characters.length));
    return (characters[i]);
}

function looper() {
    for (let j = 0; j < passwordLength; j++) {
        return (random());
    }
}

function collector() {
    let result = '';
    for (let l = 0; l < passwordLength; l++) {
        result += looper();
    }
    return result;
}

function generate() {
    if(characters = []){
        password1EL.textContent = ("no password")
        password2EL.textContent = ("no password")
    }
    else{
    password1EL.textContent = collector();
    password2EL.textContent = collector();
    }
}

function copy1() {
    if (password1EL.textContent === "" || password1EL.textContent === "copied") {
        return;
    }
    navigator.clipboard.writeText(password1EL.textContent);
    let copy = "copied";
    myPassword.push(password1EL.textContent);
    localStorage.setItem("myPassword", JSON.stringify(myPassword));
    password1EL.textContent = copy;
    renderPassword();
}

function copy2() {
    if (password2EL.textContent === "" || password2EL.textContent === "copied") {
        return; // Do nothing if the password is empty or already copied
    }
    navigator.clipboard.writeText(password2EL.textContent);
    let copy = "copied";
    myPassword.push(password2EL.textContent);
    localStorage.setItem("myPassword", JSON.stringify(myPassword));
    password2EL.textContent = copy;
    renderPassword();
}

function settings() {
    popup.classList.add("open-popup");
}

function cc() {
    historyEl.classList.remove("open-history");
    console.log("21");
}

function renderPassword() {
    let passwordList = "";
    for (let g = 0; g < myPassword.length; g++) {
        passwordList += `<li><span>${myPassword[g]}</span></li>`;
    }
    olEl.innerHTML = passwordList;
}

function ccc() {
    myPassword = [];
    olEl.innerHTML = "";
    localStorage.setItem("myPassword", JSON.stringify(myPassword));
}

// Call renderPassword on page load to display stored passwords
renderPassword();