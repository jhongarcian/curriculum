const button = document.querySelector("#button")
const nav = document.querySelector("#navTrigger")

const handleClick = () => {
    nav.classList.toggle("active")
}
button.addEventListener("click", handleClick)