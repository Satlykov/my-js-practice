
const secondHand = document.querySelectorAll('.second-hand')
const minsHand = document.querySelectorAll('.min-hand')
const hourHandMinsk = document.querySelector('.hour-hand-minsk')
const hourHandTash = document.querySelector('.hour-hand-tash')
const hourHandBish = document.querySelector('.hour-hand-bish')
const digitalClock = document.querySelector('.digital-clock')

const checkbox = document.querySelector('input[name=theme]');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.forEach(el => el.style.transform = `rotate(${secondsDegrees}deg)`)

    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360) + 90
    minsHand.forEach(el => el.style.transform = `rotate(${minsDegrees}deg)`)

    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90
    hourHandMinsk.style.transform = `rotate(${hourDegrees - 60}deg)`
    hourHandTash.style.transform = `rotate(${hourDegrees}deg)`
    hourHandBish.style.transform = `rotate(${hourDegrees + 30}deg)`
    
    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const digitalValue = now.toLocaleString("en-US", options)
    digitalClock.innerHTML= `Tashkent: ${digitalValue}`
}

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

setInterval(setDate, 1000)