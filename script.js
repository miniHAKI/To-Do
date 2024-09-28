const input = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container")

function addTask() {
    if (input.value === "" ) {
        alert("You have to write something first")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    saveData()
    }    
    input.value = "";  // after running the above code input value will  be remove from the input 
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data" ,listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();