const grandparent = document.querySelector(".parent")
const parent = document.querySelector('.child1')
const child = document.querySelector('.child2')


document.addEventListener('click', (onclick) => {
    if (onclick.target.matches('div'))
    console.log("div clicked.....")
})

const eventClicked = (type, eventType, callback) => {
    document.addEventListener(type, (onclick) => {
        if (onclick.target.matches(eventType))
            callback(onclick)
    })
}


const newdiv = document.createElement("div")
newdiv.setAttribute('class', 'parent')
// newdiv.style.width = '17em'
// newdiv.style.maxHeight = '30em'
// newdiv.style.backgroundColor = 'yellow'
document.querySelector('main').append(newdiv)

// =============================================================
