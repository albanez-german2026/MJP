// ============================
// WEDDING COUNTDOWN
// ============================
const countdown = () => {
    const countDate = new Date("Jan 17, 2026 16:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Display
    document.getElementById("days").innerText = days.toString().padStart(2,'0');
    document.getElementById("hours").innerText = hours.toString().padStart(2,'0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2,'0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2,'0');
}

// Initial call
countdown();

// Update every second
setInterval(countdown, 1000);
