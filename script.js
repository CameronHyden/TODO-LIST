const nameBox = document.querySelector("#user__textBox");
const resetButton = document.querySelectorAll(".buttons");
const inputLabel = document.querySelector(".input-label");
const homepageInfo = document.querySelector("#users__text");
const homeTitle = document.querySelector("#Homepage__message");
const usersTasks = document.querySelectorAll("#tasks__heading");
const addTaskButton = document.querySelector("#addButton");



const clearInputBoxLabel = ( ) =>{
    inputLabel.innerHTML = ""
}

const newScreen = (event) =>{
    if (event.keyCode === 13){
        homeTitle.innerHTML = "Welcome Cameron!"
        homepageInfo.style.display ='block';
        inputLabel.innerHTML = "Add your tasks below";
        nameBox.value = " ";
        addTaskButton.style.display ="block";
        for (let i = 0; i < usersTasks.length; i ++){
            usersTasks[i].style.display ='block';
        }
        
    }
}

//need to grab the value of what the user has inputted
//when button is hit 
//transfer that value to a checklist below

const addingTask = (event) =>{

}




nameBox.addEventListener("click", clearInputBoxLabel);
nameBox.addEventListener("keyup", newScreen);
