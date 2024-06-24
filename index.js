let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


let characters = letters.concat(numbers , symbols)
console.log(characters)

let btnEL = document.getElementById("btn-el")
let password1EL = document.getElementById("password1-el")
let password2EL = document.getElementById("password2-el")
let input = document.getElementById("length-el")
let passwordLength = input.value
let orginalLength = passwordLength
let popup = document.getElementById("popup-el")
let includeNumbersEl = document.getElementById("include-numbers-el");
let includeNumbers 
let includeSymbolsEl = document.getElementById("include-symbols-el");
let includeSymbols  = includeSymbolsEl.checked
function sumit(){
    passwordLength = input.value
    includeNumbers = includeNumbersEl.checked;
    console.log(includeNumbers)
    popup.classList.remove("open-popup")
    if (includeNumbers === false) {
        characters = letters.concat(symbols);
    } else if (includeNumbers === true) {
        characters = letters.concat(numbers, symbols);
    }
    
}
function reset(){
    passwordLength = orginalLength
    input.value = orginalLength
    popup.classList.remove("open-popup")
}
function random (){
    let i = (Math.floor(Math.random()*characters.length))
    return (characters[i])
}
function looper (){
    for (let j = 0 ; j < passwordLength ; j++){
        
        return(random())
    }
}
function collector() {
    let result = ''
    for (let l = 0; l < passwordLength; l++) {
        result += looper()
    }
    return result
}

function generate(){
    password1EL.textContent = collector()
    password2EL.textContent = collector()
}
function copy1(){
    if (password1EL.textContent === "" || password1EL.textContent === "copied") {
        return; // Do nothing if the password is empty or already copied
    }
    navigator.clipboard.writeText(password1EL.textContent)
    let copy = "copied"
    password1EL.textContent = copy
}

function copy2() {
    if (password2EL.textContent === "" || password2EL.textContent === "copied") {
        return; // Do nothing if the password is empty or already copied
    }
    navigator.clipboard.writeText(password2EL.textContent)
    let copy = "copied"
    password2EL.textContent = copy
}
function settings(){
    popup.classList.add("open-popup")
}