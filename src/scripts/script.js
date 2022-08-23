var counter = localStorage.getItem("counter") ? null : 0;
var H1title = document.getElementsByClassName("title")[0]
var container = document.getElementsByClassName("card-container")[0]
H1title.innerText = new Date().toLocaleDateString()

const createTodo = () => {
    let div = document.createElement("div")
    div.classList += "flex flex-row min-w-fit w-40 h-10 border-2 border-solid border-neutral-400 mt-4"
    div.innerHTML += `
    <input class="focus:outline-none text-sm lg:text-lg text-center h-full text-container" placeholder="...">
    <div class="flex items-center justify-center h-full border-l-2 border-solid border-red-600">
        <input class="w-8 h-4 checkbox" type="checkbox" name="check" onchange="toggleTodo()">
    `
    container.appendChild(div)
}


const toggleTodo = () => {
    let checkBoxTodo = document.querySelectorAll(".checkbox")
    let textContainers = document.querySelectorAll(".text-container")
    for (let i = 0; i < checkBoxTodo.length; i++) {
        if (checkBoxTodo[i].checked) {
            checkBoxTodo[i].parentElement.classList.add("opacity-10")
            textContainers[i].classList.add("line-through")
        }
        else {
            checkBoxTodo[i].parentElement.classList.remove("opacity-10")
            textContainers[i].classList.remove("line-through")
        }  
    }
}
