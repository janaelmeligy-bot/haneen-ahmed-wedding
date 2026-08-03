let weddingDate = new Date("August 20, 2026 15:00:00").getTime();

let timer = setInterval(function () {

    let now = new Date().getTime();

    let distance = weddingDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML =
            "Today is our Wedding Day ❤️";
    }

}, 1000);
