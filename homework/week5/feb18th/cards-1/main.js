
const cards = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
];

const cardList = document.getElementById("card-list")
const output = document.getElementById("output");

const renderCards = () => {
  cards.forEach((card) => {
    const listTag = document.createElement("li");
    listTag.innerText = card.name;
    listTag.setAttribute("data-value", card.name);
    cardList.appendChild(listTag);
  });
};

const handleCardClick = (e) => {
  if (e.target.matches("[data-value]")) {
    const value = e.target.getAttribute("data-value");
    output.innerText = `You Cicked no ${value}`;
  }
};
renderCards();

document.addEventListener("click", handleCardClick);
