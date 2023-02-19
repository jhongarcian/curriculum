const question = document.getElementById("answer");
const questAnswer = document.querySelector("[data-answer]");

const handleToggle = (e) => {
    if(e.target.dataset.toggle === "false") {
        e.target.dataset.toggle = "true"
        questAnswer.innerText = "because we let them play video games while they work"
    } else {
        e.target.dataset.toggle = "false";
        questAnswer.innerText = ""
    }
}

question.addEventListener("click", handleToggle)