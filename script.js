const nameBox = document.querySelector("#user__textBox");
const resetButton = document.querySelectorAll(".buttons");
const inputLabel = document.querySelector(".input-label");
const homepageInfo = document.querySelector("#users__text");



const clearInputBoxLabel = ( ) =>{
    inputLabel.innerHTML = ""
}

const newScreen = (event) =>{
    if (event.keyCode === 13){
        homepageInfo.style.display =('block');
    }
}




nameBox.addEventListener("click", clearInputBoxLabel);
nameBox.addEventListener("keyup", newScreen);
