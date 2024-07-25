export const  timer =() => {

    let timer;
    let seconds = 0;

    function updateTimer() {
        document.getElementById('timer').innerText = seconds;
        seconds++;
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(updateTimer, 1000);
        }
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }




}