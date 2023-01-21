const slider = document.querySelector('.slider-container')
const slides = Array.from(document.querySelectorAll('.slide'))


let isDragging = false;
let startPosition = 0;
let animationId = 0
let currentIndex = 0;
let prevTranslate = 0;
let currentTranslate = 0;





slides.forEach((slide, index) => {
    const slideImg = slide.querySelector('.slide__img')



    slideImg.addEventListener('dragstart', function (e) {
        e.preventDefault()
    })

    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);



    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mousemove', touchMove);
    slide.addEventListener('mouseleave', touchEnd);


})






function touchStart(index) {
    return function (e) {

        isDragging = true;
        currentIndex = index;
        startPosition = getPositionX(e);

        animationId = requestAnimationFrame(animation);
        slider.classList.add('grabbing')
    }

}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationId)
    slider.classList.remove('grabbing')

    let moved = currentTranslate - prevTranslate;

    if (moved < -120 && currentIndex < slides.length - 1) {
        currentIndex += 1
    }

    if (moved > 120 && currentIndex > 0) {
        currentIndex -= 1
    }

    setPositionIndex()
}

function touchMove(e) {
    if (isDragging) {
        let currentPosition = getPositionX(e)
        currentTranslate = prevTranslate + currentPosition - startPosition;
    }

}


function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
}

// window.oncontextmenu = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     return false
// }


function animation() {
    setSliderPosition()
    if (isDragging) {
        requestAnimationFrame(animation)
    }
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}


function setPositionIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate;
    setSliderPosition()
}


