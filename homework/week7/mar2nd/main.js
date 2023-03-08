const URL = "https://dog.ceo/api/breeds/list/all";

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     const names = Object.keys(data.message)
//     const keys = Object.values(data.message)

//     const result = names.map((dog, index) => {
//         const dogAndNum = `${dog} - ${keys[index].length === 0 ? 1 : keys[index].length}`
//         return dogAndNum
//     })
//     console.log(result)
//   });

// This is how we use Async Await in our code

async function getNameWithLength() {
  try {
    const DEFAULT_NUMBER = 1;
    const response = await fetch(URL);
    if (response.ok) {
      console.log(response.ok);
      const data = await response.json();
      console.log(data);
      const names = Object.keys(data.message);
      const keys = Object.values(data.message);
      const result = names.map((dog, index) => {
        const dogAndNum =  `${dog} - ${
          keys[index].length === 0 ? DEFAULT_NUMBER : keys[index].length
        }`;
        return dogAndNum;
      });
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
}

getNameWithLength();

// function getValueWithDelay(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }
// function getValueWithDelayError(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error");
//     }, delay);
//   });
// }

// async function doStuff() {
//   try {
//     const result1 = await getValueWithDelay(10, 250);
//     console.log(result1);
//     const result2 = await getValueWithDelay(20, 500);
//     console.log(result2);
//     const result3 = await getValueWithDelayError("hi", 250)
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("finally")
//   }
// }

// doStuff();
