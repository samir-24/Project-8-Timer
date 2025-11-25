// For countdown timer
let sec = 0;
let timer = null;

function startTimer() {
    if (timer !== null) return;
    timer = setInterval(() => {
        sec++;
        document.getElementById('times').textContent = sec;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    sec = 0;
    document.getElementById('times').textContent = sec;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);


// For quotes display
const quotes = [
    "जिसका कोई नहीं, उसका शिव है।",
    "महादेव की कृपा से असंभव भी संभव है।",
    "महादेव नहीं, जीवन है मेरा।",
    "श्रद्धा शिव में हो, तो रास्ते खुद बनते हैं।",
    "जो शिव को पाए, उसे और क्या चाहिए?",
    "महादेव की मर्जी से ही हर सुबह नए अवसर लाती है।"
];

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

