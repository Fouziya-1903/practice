const text = "If one day the moon calls you by your name don't be surprised, because every night I tell her about you.";

document.getElementById("para").textContent = text;

const input1 = document.getElementById('input1');
const btn = document.getElementById('btn');
const timeDisplay = document.getElementById("timer");
const result = document.getElementById('result');

let timeLeft, timer;
const totalTime = 5; // seconds

btn.addEventListener("click", function () {
    input1.value = "";
    input1.disabled = false;
    timeLeft = totalTime;
    timeDisplay.textContent = `Time Left ${timeLeft} sec`;
    btn.disabled = true;
    result.textContent = "";
    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timer);
            input1.disabled = true;
            btn.disabled = false;

            // ✅ Check the input after time ends
            if (input1.value.trim() === "") {
                result.textContent = "⚠️ You didn't type anything.";
            } else if (text.startsWith(input1.value)) {
                let words = input1.value.trim().split(/\s+/).length;
                let wpm = (words / totalTime) * 60;
                result.textContent = `✅ Match! Your Speed is ${wpm.toFixed(2)} words per minute.`;
            } else {
                result.textContent = "❌ The text doesn't match from the beginning.";
            }

            timeDisplay.textContent = "Time left 0 sec";

        } else {
            timeDisplay.textContent = `Go on!!... you have ${timeLeft} sec only`;
        }
    }, 1000);
});
