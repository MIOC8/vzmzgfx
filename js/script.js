const header = document.querySelector('.header');
const item = document.querySelectorAll('.block-item');
const headerBox = header.firstElementChild;
const range2 = document.querySelector('.range2');
const range4 = document.querySelector('.range4');
const range6 = document.querySelector('.range6');
const range1 = document.querySelector('.range1');
const range5 = document.querySelector('.range5');
const range3 = document.querySelector('.range3');

header.addEventListener('click', function (event) {
    header.classList.toggle('header-active')
    for (i of item) {
        i.classList.toggle('block-item-active')
    }
    headerBox.classList.toggle('block__box-header-active');
})

item[0].addEventListener('click', function (event) {
    item[0].classList.toggle('bg');
    range2.classList.toggle('range-active');
    range1.classList.toggle('range-off');
    event.stopPropagation()
})
item[1].addEventListener('click', function (event) {
    item[1].classList.toggle('bg');
    range4.classList.toggle('range-active');
    range3.classList.toggle('range-off');
    event.stopPropagation()
})
item[2].addEventListener('click', function (event) {
    item[2].classList.toggle('bg');
    range6.classList.toggle('range-active');
    range5.classList.toggle('range-off');
    event.stopPropagation()
})

const dot = document.querySelector('.block__doted');
console.log(dot);
dot.addEventListener('mouseover', function (event) {
    if (event.target.closest('.dot')) {
        event.target.classList.add('dot-active')
        event.target.closest('.dot-active').addEventListener('mouseover', function (event) {
            if (event.target.closest('.dot-active')) {
                event.target.classList.add('dot-active2')
                event.target.closest('.dot-active2').addEventListener('mouseover', function (event) {
                    if (event.target.closest('.dot-active2')) {
                        event.target.classList.add('dot-active3')
                        event.target.closest('.dot-active3').addEventListener('mouseover', function (event) {
                            if (event.target.closest('.dot-active3')) {
                                event.target.classList.add('dot-active4')
                                event.target.closest('.dot-active4').addEventListener('mouseover', function (event) {
                                    if (event.target.closest('.dot-active4')) {
                                        event.target.className = ""
                                        console.log(event.target.className);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })

    }
})

const file = document.querySelectorAll('.item__menu');
console.log(file);
const fil = document.querySelectorAll('.icon')

for (let el of file) {
    el.addEventListener('click', function (event) {
        el.classList.toggle('item__menu-active')
    })
    for (let ti of file) {
        ti.addEventListener('click', function (event) {
            ti.firstElementChild.firstElementChild.classList.toggle('icon-active')

        })
    }
}
const diagr = document.querySelectorAll('.diagrama svg');
console.log(diagr);

const but = document.querySelectorAll('.button');
console.log(but[0]);
but[0].addEventListener('click', function (event) {
    diagr[0].classList.toggle('svg-active')
    but[0].classList.toggle('button1-active');
})
but[1].addEventListener('click', function (event) {
    diagr[1].classList.toggle('svg-active')
    but[1].classList.toggle('button2-active');
})
but[2].addEventListener('click', function (event) {
    diagr[2].classList.toggle('svg-active')
    but[2].classList.toggle('button3-active');
})
but[3].addEventListener('click', function (event) {
    diagr[3].classList.toggle('svg-active')
    but[3].classList.toggle('button4-active');
})
but[4].addEventListener('click', function (event) {
    diagr[4].classList.toggle('svg-active')
    but[4].classList.toggle('button5-active');
})




