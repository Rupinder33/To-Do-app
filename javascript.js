let inputs = document.getElementById("inputs");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");

        newEle.innerHTML = `
            <span class="task-text">${inputs.value}</span> 
            <i class="delete fa-solid fa-trash"></i> 
            <i class="complete fa-solid fa-check"></i>
        `;

        text.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector(".delete").addEventListener("click", () => {
            newEle.remove();
        });

    
        newEle.querySelector(".complete").addEventListener("click", () => {
            newEle.querySelector(".task-text").classList.toggle('completed');
        });
    }
}
