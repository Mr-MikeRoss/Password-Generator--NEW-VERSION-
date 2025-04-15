//Dom Variables
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let snOnEl = document.getElementById("sn-on")
let snOffEl = document.getElementById("sn-off")
let snState = true


//functions
if (snState) {
    snOn()
}

function snOn() {
    snState = true
    snOnEl.style.background = "#10B981";
    snOnEl.style.color = "white";
    snOnEl.style.textShadow = "0 0 0 #10B981";
    snOffEl.style.background = "#273549";
    snOffEl.style.color = "#10B981" ;
    snOffEl.style.textShadow = "0 0 0 #10B981";
}

function snOff() {
    snState = false
    snOffEl.style.background = "#10B981";
    snOffEl.style.color = "white";
    snOffEl.style.textShadow = "0 0 0 #10B981";
    snOnEl.style.background = "#273549";
    snOnEl.style.color = "#10B981" ;
    snOnEl.style.textShadow = "0 0 0 #10B981";
}


function generatePassword() {
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ] 
    let symbolsNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    if (snState) {
        characters.push(...symbolsNumbers)
        for (let i = 0; i < 15; i++) {
            let generatePasswordOne = Math.floor(Math.random() * characters.length)
            let generatePasswordTwo = Math.floor(Math.random() * characters.length)
            passwordOneEl.textContent += characters[generatePasswordOne]
            passwordTwoEl.textContent += characters[generatePasswordTwo]
        }
    } else {
        for (let i = 0; i < 15; i++) {
            let generatePasswordOne = Math.floor(Math.random() * characters.length)
            let generatePasswordTwo = Math.floor(Math.random() * characters.length)
            passwordOneEl.textContent += characters[generatePasswordOne]
            passwordTwoEl.textContent += characters[generatePasswordTwo]
        }  
    }
}
 
//copy function
passwordOneEl.onclick = function() {
    document.execCommand("copy")
}

passwordTwoEl.onclick = function() {
    document.execCommand("copy")
}

passwordOneEl.addEventListener("copy", function(event) {
    event.preventDefault()
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", passwordOneEl.textContent)
    }
})

passwordTwoEl.addEventListener("copy", function(event) {
    event.preventDefault()
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", passwordTwoEl.textContent)
    }
})



