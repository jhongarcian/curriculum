const url = "https://api.artic.edu/api/v1/artworks?page=2&limit=50";

const fetchtData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.data)
}

fetchtData()