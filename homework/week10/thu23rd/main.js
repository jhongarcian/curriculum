// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "52f5191bfamshfd1022ed29e4356p122e58jsnc4eabe0abd06",
//     "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
//   },
// };

// fetch("https://the-cocktail-db.p.rapidapi.com/random.php", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const CLIENT_ID_KROGER =
  "cocktailingridientlist-5a7697e175b847c69d3bbd89637bf9245856402894315177585";
const CLIENT_SECRET_KROGER = "XUYvF1YJPwu1isMhAzOb8dDRGzDSRhxutltpehUV";
const ENCODED_TOKEN_KROGER =
  "Y29ja3RhaWxpbmdyaWRpZW50bGlzdC01YTc2OTdlMTc1Yjg0N2M2OWQzYmJkODk2MzdiZjkyNDU4NTY0MDI4OTQzMTUxNzc1ODU6VlVoZXB0bHR1eGhSU0R6R1JEZDhiT3pBaE1zaTF1d1BKWTFGdllVWA==";
const OAUTH_BASE_URL = "https://api-ce.kroger.com/v1/connect/oauth2/token";
const getToken = async () => {
  const settings = {
    async: true,
    crossDomain: true,
    url: OAUTH_BASE_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${ENCODED_TOKEN_KROGER}`,
    },
    data: {
      grant_type: "client_credentials",
      scope: "product.compact",
    },
  };

  try {
    const response = await fetch(settings.url, {
      method: settings.method,
      headers: settings.headers,
      body: new URLSearchParams(settings.data).toString(),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getToken();
