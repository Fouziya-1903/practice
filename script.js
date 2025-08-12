let timeLeft = 10;
let timex;

function countDown(){
    timex = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML=timeLeft;
        if(timeLeft <= 0){
            clearInterval(timex);

            document.getElementById("timer").innerHTML="No!!";
        }
    }, 1000);
}