const button = document.querySelector("#btn")
const form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const stringified = stringifyFormData(data)
    fetchData(stringified)

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
    let data = {
      query: {
        term: {
          is_public_domain: true,
        },
      },
    };
    for(let key of fd.keys()){
        data[key] = fd.get(key)
    }
    return JSON.stringify(data)
}
async function fetchData(body) {
    const response = await fetch("https://api.artic.edu/api/v1/artworks/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    });
    const data = await response.json()
    renderSearchResult(data)
}

function renderSearchResult(data) {
    console.log(data)
}

const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

fetch("https://graphql-pokeapi.graphcdn.app/", {
  credentials: "omit",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: gqlQuery,
    variables: gqlVariables,
  }),
  method: "POST",
})
  .then((res) => res.json())
  .then((res) => console.log("Response from server", res));