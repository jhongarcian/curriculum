const questionList = document.getElementById("questions-container");

const questions = [
  {
    id: 1,
    question:
      "In what year what the Gettysburg Address delivered by Abraham Lincoln",
    answersOptions: [
      { answer: 1861, list: "a", correct: false },
      { answer: 1863, list: "b", correct: true },
      { answer: 1865, list: "c", correct: false },
      { answer: 1870, list: "d", correct: false },
    ],
  },
  {
    id: 1,
    question:
      "In what year what the Gettysburg Address delivered by Abraham Lincoln",
    answersOptions: [
      { answer: 1861, list: "a", correct: false },
      { answer: 1863, list: "b", correct: true },
      { answer: 1865, list: "c", correct: false },
      { answer: 1870, list: "d", correct: false },
    ],
  },
];

const renderQuestion = () => {
  questions.forEach((question) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const output = document.createElement("div");

    p.innerText = question.question;
    div.appendChild(p);
    question.answersOptions.forEach((e) => {
      const span = document.createElement("span");
      span.innerHTML = `${e.list}. ${e.answer}`;
      span.setAttribute("data-answer", "");
      div.appendChild(span);

      const handleClick = (event) => {
        let styles = "";
        let result = "";
        if (event.target.matches("[data-answer]")) {
          if (e.correct !== true) {
            result = "WRONG";
            styles = `color: red`;
          } else {
            result = "CORRECT!!";
            styles = `color: green`;
          }
        }
        output.setAttribute("style", styles, "class", "a");
        output.innerText = result;
        div.appendChild(output);
      };
      span.addEventListener("click", handleClick);
    });
    questionList.appendChild(div);
  });
};

renderQuestion();
