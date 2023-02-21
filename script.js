const items = document.querySelector('.section-button-d')
const item = document.querySelectorAll('.item')
const image = document.querySelectorAll('.section-blog-d')







for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function () {
        items.querySelector('.active').classList.remove('active')
        item[i].classList.add('active');
        let filterName = item[i].getAttribute('data-name');



        for (let i = 0; i < image.length; i++) {
            let filterImage = image[i].getAttribute('data-name')
            if (filterName === filterImage || filterName === 'All') {
                image[i].classList.add('show')
                image[i].classList.remove('hide')

            }
            else {
                image[i].classList.add('hide')
                image[i].classList.remove('show')
            }
        }
    })
}



let num = document.querySelectorAll('.num')
let i = 0
let a = Number(num[0].innerHTML)
let b = Number(num[1].innerHTML)
let d = Number(num[2].innerHTML)
let c = Number(num[3].innerHTML)
function numberPlus() {
    i++
    if (i <= a) {
        num[0].innerHTML = i
    }
    if (i <= b) {
        num[1].innerHTML = i
    }
    if (i <= d) {
        num[2].innerHTML = i
    }
    if (i <= c) {
        num[3].innerHTML = i
    }
}
setInterval(numberPlus, 10)
let say = 0;
window.addEventListener('scroll', () => {
    let g = document.documentElement.scrollTop;
    if (g > 1200) {
        say++;
        if (say == 1) {
            setInterval(numberPlus, 10)
        }

    }
})



let leftBtn = document.getElementById('left-btn-s')
let rightBtn = document.getElementById('right-btn-s')
let sliderContainer = document.getElementById('section-slider-container-s')

function slide() {
    for (let i = 0; i < sliderContainer.children.length; i++) {
        sliderContainer.children[i].style.transform = `translateX(-${270 * count}px)`
    }

}
let count = 0;

setInterval(() => {
    if (count < sliderContainer.children.length) {
        count++;
        slide();
    } else {
        count = 0;
        slide();
    }
}, 3000);
leftBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        slide();
    } else {
        count = 0;
        slide();
    }
})

rightBtn.addEventListener('click', () => {
    if (count > sliderContainer.children.length - 8) {
        count++;
        slide();
    } else {
        count = 0;
        slide();
    }
})

const angleDown = document.getElementById('angle-down')
const angleUp = document.getElementById('angle-up')
const angleP = document.getElementById('angle-p')


angleDown.addEventListener('click', function () {
    angleP.style.display = 'block'
    angleDown.style.display = 'none'
    angleUp.style.display = 'block'
})

angleUp.addEventListener('click', function () {
    angleP.style.display = 'none'
    angleDown.style.display = 'block'
    angleUp.style.display = 'none'

})

const angleDown1 = document.getElementById('angle-down-1')
const angleUp1 = document.getElementById('angle-up-1')
const angleP1 = document.getElementById('angle-p-1')


angleDown1.addEventListener('click', function () {
    angleP1.style.display = 'block'
    angleDown1.style.display = 'none'
    angleUp1.style.display = 'block'
})

angleUp1.addEventListener('click', function () {
    angleP1.style.display = 'none'
    angleDown1.style.display = 'block'
    angleUp1.style.display = 'none'

})

const angleDown2 = document.getElementById('angle-down-2')
const angleUp2 = document.getElementById('angle-up-2')
const angleP2 = document.getElementById('angle-p-2')


angleDown2.addEventListener('click', function () {
    angleP2.style.display = 'block'
    angleDown2.style.display = 'none'
    angleUp2.style.display = 'block'
})

angleUp2.addEventListener('click', function () {
    angleP2.style.display = 'none'
    angleDown2.style.display = 'block'
    angleUp2.style.display = 'none'

})


const sectionM = document.querySelector('.section-card-img-m')

fetch('././db/funvd.json')
    .then(resp => resp.json())
    .then(data => {
            sectionM.innerHTML += `
           
               <video src=${data.video} controls></video>
           
        `
    })

