const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let btnEL = document.getElementById("btn-el")
let password1EL = document.getElementById("password1-el")
let password2EL = document.getElementById("password2-el")
let passwordLength = parseInt(prompt("Enter the password length:")) 

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
    window.alert("Password copied to clipboard");
}

function copy2() {
    if (password2EL.textContent === "" || password2EL.textContent === "copied") {
        return; // Do nothing if the password is empty or already copied
    }
    navigator.clipboard.writeText(password2EL.textContent)
    let copy = "copied"
    password2EL.textContent = copy
    window.alert("Password copied to clipboard");
}