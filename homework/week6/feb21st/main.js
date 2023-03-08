const paginationDisplay = document.getElementById("pagination");
const output = document.getElementById("feedback");
let numberPosition = 1;

const data = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
];

const renderApp = () => {
  renderData();
};

const renderData = () => {
  data.map((item) => {
    const span = document.createElement("div");
    span.innerHTML;
    span.setAttribute("data-number", item.number);
    paginationDisplay.appendChild(span);
  });
};

const renderOutput = (num) => {
  const list = document.querySelectorAll("[data-number]");
  const item = list[num - 1];
  output.innerText = num;
  list.forEach((e) => {
    e.classList = "";
  });
  item.classList = "color-red";
};

document.addEventListener("click", (e) => {
  if (e.target.matches("#prev")) {
    if (numberPosition > 1) {
      numberPosition -= 1;
      renderOutput(numberPosition);
    }
  } else if (e.target.matches("#next")) {
    if (numberPosition < data.length) {
      numberPosition += 1;
      renderOutput(numberPosition);
    }
  } else if (e.target.matches("[data-number]")) {
    numberPosition = Number(e.target.dataset.number);
    renderOutput(numberPosition);
  }
});

renderApp();
renderOutput(numberPosition);