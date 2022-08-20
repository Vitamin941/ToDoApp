var H1title = document.getElementsByClassName("title")[0]
var container = document.getElementsByClassName("card-container")[0]
H1title.innerText = new Date().toLocaleDateString()


const createTodo = () => {
    let div = document.createElement("div")
    div.classList += "flex flex-row min-w-fit w-40 h-10 border-2 border-solid border-neutral-400 mt-4"
    div.innerHTML += `
    <input class="text-sm lg:text-lg text-center h-full" placeholder="...">
    <div class="flex items-center justify-center h-full border-l-2 border-solid border-red-600">
        <input class="focus:outline-hidden w-8 h-4" type="checkbox" name="check">
        `
    container.appendChild(div)
    console.log("clicked")
}
