const mini = document.querySelectorAll('.mini-box')
// mini.forEach(item =>{
//     item.addEventListener('click', () =>{
//         item.classList.toggle('show')
//     })
// })


mini.forEach(item => {
    item.addEventListener('click',  () =>{
        mini.forEach(elem =>{
            elem.classList.remove('show')
        })
        item.classList.toggle('show')
    })
})



const box = document.querySelector('.changeBox')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const oval = document.querySelector('.oval')

red.addEventListener('click', () =>{
    box.classList.toggle('changeRed')
})
blue.addEventListener('click', () =>{
    box.classList.toggle('changeBlue')
})
oval.addEventListener('click', () =>{
    box.classList.toggle('changeOval')
})

const text = document.querySelector('.text')
const popUp = document.querySelector('.pop-up')
const clear = document.querySelector('.clear')

popUp.addEventListener('click', () =>{
    if (text.value.length){
        alert(`Привет, ${text.value}!`)
    } else {
        alert('Напишите свое имя!')
    }
})

clear.addEventListener('click', () =>{
    if (text.value.length){
        text.value = ''
    }
})
