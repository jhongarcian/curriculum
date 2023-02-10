const app = document.getElementById('app')
const header = document.createElement('header')
const anchor = document.createElement('a')
const p = document.createElement('p')

const navs = [
    {
        elName: "Home",
        href: "./home.html",
        id: "home"
    },
    {
        elName: "Portfolio",
        href: "./home.html",
        id: "portfolio"
    },
    {
        elName: "About",
        href: "./home.html",
        id: "about"
    },
    {
        elName: "Contact",
        href: "./home.html",
        id: "contact"
    },
    {
        elName: "Privacy Policy",
        href: "./home.html",
        id: "privPolicy"
    }
]

app.appendChild(header)

const render = () => {
    app.appendChild(header)
    navs.forEach(item => {
        const nav = document.createElement('a')
        nav.innerText = item.elName
        nav.href = item.href
        nav.setAttribute("id", item.id)
        nav.addEventListener('click', e => {
            e.preventDefault()
            app.appendChild(p)
            p.innerText = item.elName
        })
        header.append(nav)
    })  
}
render()
