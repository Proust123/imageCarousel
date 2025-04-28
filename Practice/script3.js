const imgs = document.querySelector('.imgs')
const img = document.querySelectorAll('.imgs img')
const pre = document.querySelector('.pre')
const next = document.querySelector('.next')

let idx = 0

let interval = setInterval(run, 3000)

function run(){
    idx++
    changeSlide()
}

function changeSlide(){
    if(idx < 0){
        idx = img.length - 1
    }else if(idx > img.length - 1){
        idx = 0
    }
    

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 3000)
}

pre.addEventListener('click', () => {
    idx--

    changeSlide()
    resetInterval()
})
next.addEventListener('click', () => {
    idx++

    changeSlide()
    resetInterval()
})