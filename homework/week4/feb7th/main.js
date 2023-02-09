const template = document.querySelector("[data-template-container]")
const storeItemContainer = document.querySelector('[data-store-container]')
const elAntiques = document.querySelector('#antiques')

const form = document.querySelector("#addSell")
const newItems = []

const antiques = [
    {
        id: 1,
        name: "Persian Rug",
        img: "https://sammydvintage.com/wp-content/uploads/2019/07/3.-Record-Breaking-Persian-Rug-33.76-million.jpg",
        price: 1000
    },
    {
        id: 2,
        name: `Leonardo da Vinci's Codex Leicester`,
        img: "https://sammydvintage.com/wp-content/uploads/2019/07/4.-Leonardo-da-Vinci%E2%80%99s-Codex-Leicester-%E2%80%93-30.8-million.jpg",
        price: 10000
    },
    {
        id: 3,
        name: "Patek Philippe Supercomplication Pocket Watch",
        img: "https://sammydvintage.com/wp-content/uploads/2019/07/5.-Patek-Philippe-Supercomplication-Pocket-Watch-24-million.jpg",
        price: 100000
    },
    {
        id: 4,
        name: "Ru Guanyao Brush Washer Bowl",
        img: "https://sammydvintage.com/wp-content/uploads/2019/07/2.-Ru-Guanyao-Brush-Washer-Bowl-37.68-million.png",
        price: 100
    },
]

document.addEventListener("submit", (e) => {
    e.preventDefault()
    let itemName = document.getElementById("itemName")
    let itemPrice = document.getElementById("itemPrice")
    let url = document.getElementById("itemUrl")

    console.log(itemName.value, itemPrice, url)
    if(itemName.value === "" || itemPrice.value === "" || url.value === "")return alert("Complete the form")
    {   
        const obj = {
            id: Date.now(),
            name: itemName.value,
            img: url.value,
            price: itemPrice.value
        }

        newItems.push(obj)
        setupStore()          
    }
})
console.log(newItems)

const setupStore = () => {
    const sumArray = antiques.concat(newItems)
    elAntiques.innerText = sumArray.length
    sumArray.forEach(renderStoreItem)
    console.log(sumArray)
}
const renderStoreItem = item => {
    if(!template) return 
    {
        const storeItem = template.content.cloneNode(true)
        console.log(item)
    
        const container = storeItem.querySelector('[data-store-item]')
        container.dataset.itemId = item.id
    
        const name = storeItem.querySelector('[data-name]')
        name.innerText = item.name
    
        const image = storeItem.querySelector('[data-image]')
        image.src = item.img
    
        const price = storeItem.querySelector('[data-price]')
        price.innerText = item.price
    
        storeItemContainer.appendChild(storeItem)
    }
} 

setupStore()