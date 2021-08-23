const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const changeBtn = document.querySelector('.сhange-button')
const imgBtnLeft = document.getElementById('left')
const imgBtnRight = document.getElementById('right')
const sidebar = document.querySelector('.sidebar')
const sidebarContainer = document.querySelector('.container-sidebar')
const mainSlide = document.querySelector('.main-slide')
const mainSlideContainer = document.querySelector('.container-main-slide')
const slidesCount = mainSlideContainer.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0
let isDrag = false
let vertical = false
let start
let end

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click',() => {
    changeSlide('up')
})

downBtn.addEventListener('click',() => {
    changeSlide('down')
})

changeBtn.addEventListener('click',() => {
    imgBtnRight.classList.toggle('fa-arrow-right')
    imgBtnRight.classList.toggle('fa-arrow-up')
    imgBtnLeft.classList.toggle('fa-arrow-left')
    imgBtnLeft.classList.toggle('fa-arrow-down')

    sidebar.classList.toggle('sidebar-vertical')
    sidebarContainer.classList.toggle('container-sidebar-vertical')
    mainSlide.classList.toggle('main-slide-vertical')
    mainSlideContainer.classList.toggle('container-main-slide-vertical')

    vertical === false ? vertical = true : vertical = false
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
    if (!vertical) {
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
    
        mainSlideContainer.style.transform = `translateY(-${activeSlideIndex * height}px)`
    
        sidebarContainer.style.transform = `translateY(${activeSlideIndex * height}px)`
    }

    if (vertical) {
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
    
        const width = (container.clientWidth * 0.65)
    
        mainSlideContainer.style.transform = `translateX(-${activeSlideIndex * width}px)`
    
        sidebarContainer.style.transform = `translateX(${activeSlideIndex * width}px)`
    }
}