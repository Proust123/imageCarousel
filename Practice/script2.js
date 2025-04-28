const imgs = document.querySelector('.imgs')
const img = document.querySelectorAll('img')
const pre = document.querySelector('.pre')
const next = document.querySelector('.next')
let idx = 0

let interval = setInterval(run, 3000)

function run(){
    idx++

    changeSlide()

}

function changeSlide(){
    if(idx > img.length - 1){
        idx = 0
    }else if(idx < 0){
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(-${idx * 500}px)`

}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 3000)
}

pre.addEventListener('click', function(){
    idx--

    changeSlide()
    resetInterval()

})
next.addEventListener('click', function(){
    idx++

    changeSlide()
    resetInterval()

})