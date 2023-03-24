// Const variables
const URL = "https://dog.ceo/api/breeds/image/random";
const dogContainer = document.querySelector("#dogs");
const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const REGEX = /(?<=\/breeds\/)[^\/]+/;
const scoreFeedback = document.querySelectorAll("#score-feedback");
const lenghtFeedback = document.querySelectorAll("#length-feedback");
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

// Tracking state variables
let correctAnswer = [];

// EventListerner section
document.addEventListener("click", (e) => {
  const target = e.target;
  const question = document.querySelector("#question");
  const dataQuestion = document.querySelectorAll("[data-question]");
  const dogQuestion = document.querySelector("#dog-question");
  if (target === btn) {
    if (!dataQuestion.length) {
      printDogs();
    }
    removeImgAndQuestion(dataQuestion, dogQuestion);
  }
  if (target.matches("[data-question]")) {
    const correctTarget = target.src.match(question.textContent);
    correctTarget
      ? getCorrectAnswer(target, dataQuestion, dogQuestion)
      : getWrongAnswer(target, dataQuestion, dogQuestion);
  }
  if (target === closeModalButton) {
    if (!dataQuestion.length) {
      printDogs();
    }
    removeImgAndQuestion(dataQuestion, dogQuestion);
    toggleModal();
    correctAnswer = [];
    printScore();
  }
});
window.addEventListener("DOMContentLoaded", () => {
  scoreFeedback.forEach((score) => {
    score.innerText = 0;
  });
  lenghtFeedback.forEach((score) => {
    score.innerText = correctAnswer.length;
  });
});

// Web application logic

const getDogImages = async () => {
  try {
    let dogs = [];
    for (let i = 0; i < 4; i++) {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        const dogSrc = data.message;
        dogs.push(dogSrc);
      }
    }
    return dogs;
  } catch (e) {
    console.error(e);
  }
};

const printDogs = async () => {
  const dogsArray = await getDogImages();
  dogsArray.forEach((dog) => {
    createADogImg(dog);
  });
  const randomDog = getRandomDog(dogsArray);
  const randomedDogWithInfo = randomDog.match(REGEX);
  createPrompt(randomedDogWithInfo);
};

const createADogImg = (dog) => {
  // create a div parent 
  const imgTag = document.createElement("img");
  imgTag.src = dog;
  imgTag.className = "dog-container";
  imgTag.dataset.question = "";
  dogContainer.append(imgTag);
};

function createPrompt(randomedDogWithInfo) {
  const h2 = document.createElement("h2");
  const span = document.createElement("span");
  h2.id = "dog-question";
  h2.innerText = `Select the correct Dog: `;
  container.append(h2);
  span.innerText = `${randomedDogWithInfo}`;
  span.id = "question";
  h2.append(span);
}

function getWrongAnswer(target, dataQuestions, dogQuestion) {
  correctAnswer.push(0);
  target.classList.add("wrong-dog");

  printScore();
  setTimeout(() => {
    removeImgAndQuestion(dataQuestions, dogQuestion);
  }, 200);
}

function getCorrectAnswer(target, dataQuestions, dogQuestion) {
  correctAnswer.push(1);
  target.classList.add("correct-dog");

  printScore();
  setTimeout(() => {
    removeImgAndQuestion(dataQuestions, dogQuestion);
  }, 200);
}

function printScore() {
  const result = getSumFromAnswer();
  scoreFeedback.forEach((score) => {
    score.innerText = result;
  });
  lenghtFeedback.forEach((score) => {
    score.innerText = correctAnswer.length;
  });
  isQuizCompleted();
}

function getSumFromAnswer() {
  if (correctAnswer.length > 0) {
    const result = correctAnswer.reduce((currentVal, acoumulator) => {
      return currentVal + acoumulator;
    });
    return result;
  } else {
    return 0;
  }
}

function removeImgAndQuestion(dataQuestions, dogQuestion) {
  if (dataQuestions.length === 4) {
    dataQuestions.forEach((image) => {
      image.remove();
    });
    dogQuestion.remove();
    printDogs();
  }
}

const getRandomDog = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

function isQuizCompleted() {
  if (correctAnswer.length === 5) {
    toggleModal()
  }
}

function toggleModal() {
  modal.classList.toggle("open");
  overlay.classList.toggle("open");
}


// hide the button 
// track questions 
// track correct answer 
// at the corner .