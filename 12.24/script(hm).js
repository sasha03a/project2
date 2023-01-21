
alert('Введіть пароль. У вас залишилось 20 секунд')
function timeCount() {

    const timer = document.querySelector('.timer')
    const timer__count = timer.querySelector('.timer__count');

    let timeSec = 20;
    
    const countDown = setInterval(() => {

        timeSec--;
        console.log(timeSec);
        // displayTime(timeSec);
        timer__count.textContent = timeSec;

        if (timeSec <= 0) {
            clearInterval(countDown)
            alert('Ви не встигли')
        }
    }, 1000)
   
    document.querySelector('button').onclick = stopTime;
    function stopTime() {
        let a = document.querySelector('.pass').value;
        let b = 'password'
        if (b == a) {
            clearInterval(countDown);
            alert('Ви ввели правильний пароль')
        }
        else  {
            alert('Пароль невірний. Спробуйте ще раз')
        }
    }

    stopTime()
}

timeCount()






// function reverseTime() {
//     if (blockTime.innerHTML >= 0) {
//         blockTime.innerHTML--;
//     }
// }
// var intervalID = setInterval(reverseTime, 1000)
// document.querySelector('button').onclick = stopTime;



