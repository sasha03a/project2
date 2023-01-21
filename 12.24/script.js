document.addEventListener('DOMContentLoaded', () => {


    function timeCount(id, endtime) {
        // const newYear = new Date('Jan 1 2024 00:00:00')
        const timer = document.getElementById(id);
        const timerDays = timer.querySelector('.timer__count-days');
        const timerHours = timer.querySelector('.timer__count-hours');
        const timerMinutes = timer.querySelector('.timer__count-minutes');
        const timerSeconds = timer.querySelector('.timer__count-seconds');





        function setTime() {
            let now = new Date();
            let leftUntil = endtime - now;
            // console.log(leftUntil);
            let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);

            let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;

            let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

            let seconds = Math.floor(leftUntil / 1000) % 60;


            timerDays.textContent = days;
            timerHours.textContent = hours;
            timerMinutes.textContent = minutes;
            timerSeconds.textContent = seconds;


            if (leftUntil <= 0) {
                clearInterval(timeInterval)
                timerDays.textContent = 0;
                timerHours.textContent = 0;
                timerMinutes.textContent = 0;
                timerSeconds.textContent = 0;

            }

        }
        let timeInterval=setInterval(setTime, 1000);
        setTime();
    }

    timeCount("timer1", new Date('Jan 1 2024 00:00:00'));
    timeCount("timer2", new Date('Jun 1 2023 00:20:00'));
})

