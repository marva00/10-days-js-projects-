const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
    }
}