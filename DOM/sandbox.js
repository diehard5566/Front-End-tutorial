// const para = document.querySelector('div.error')
// console.log(para)

// const para = document.querySelectorAll('p')
// const error = document.querySelectorAll('.error')

// console.log(error)

//get an element by ID

// const title = document.getElementById('page-title')
// console.log(title)

//get element by their class name

// const errors = document.getElementsByClassName('error')
// console.log(errors)

//get element bt their tag name
// const paras = document.getElementsByTagName('p')
// console.log(paras)

// const para = document.querySelector('p')

// console.log(para.innerText)
// para.innerText = 'Yeet'

// const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += 'bruh'
// })

// const content = document.querySelector('.content')

// content.innerHTML = '<h2>This is a new h2</h2>'

// const people = ['mario', 'luigi', 'yoshi']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })
//-------------------------index

//-------------------------index2

// const link = document.querySelector('a')

// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://www.thenetninja.co.uk')
// link.innerText = 'The Ninja Website'

// const mssg = document.querySelector('p')

// console.log(mssg.getAttribute('class'))
// mssg.setAttribute('class', 'success')
// mssg.setAttribute('style', 'color:green')
//--------------------------

//--------------------------index3

// const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px')

// console.log(title.style.color)
// title.style.margin = '50px'
// title.style.color = 'crimson'
// title.style.fontSize = '60px'
// title.style.margin = ''

// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.remove('error')
// content.classList.add('success')

const paras = document.querySelectorAll('p')
console.log(paras)
paras.forEach(para => {
    // console.log(para)
    if (para.textContent.includes('error')) {
        para.classList.add('error')
    }
    if (para.textContent.includes('success')) {
        para.classList.add('success')
    }
})
