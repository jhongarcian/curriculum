const button = document.querySelector("#btn");
const form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data, fieldNames);
  console.log(stringified);
}

//HARDCODED
// function stringifyFormData(fd) {
//     const data = {
//         name: fd.get('name'),
//         address: fd.get('address'),
//         cellPhone: fd.get('cell-phone'),
//         email: fd.get('email')
//     }
//     return JSON.stringify(data)
// }

function stringifyFormData(fd) {
  let data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data);
}
