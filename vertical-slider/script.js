const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0
let isDrag = false
let start
let end

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click',() => {
    changeSlide('up')
})

downBtn.addEventListener('click',() => {
    changeSlide('down')
})

container.addEventListener('wheel',(event) => {
    if (event.deltaY > 0) {
        changeSlide('up')
    }
    if (event.deltaY < 0) {
        changeSlide('down')
    }
})

container.addEventListener('mousedown',(event) => {
    isDrag = true
    start = event.clientY
    console.log(start)
})

container.addEventListener('mouseup',(event) => {
    isDrag = false
    end = event.clientY
    console.log(end)
})


function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}