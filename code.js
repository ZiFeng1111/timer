const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const new_years = "1 Jan 2022";

function countdown()
{
    const new_years_date = new Date(new_years);
    const current_date = new Date();

    const total_seconds = (new_years_date - current_date) / 1000;

    const days = Math.floor(total_seconds / 3600 / 24);
    const hours = Math.floor(total_seconds / 3600) % 24;
    const mins = Math.floor(total_seconds / 60) % 60;
    const seconds = Math.floor(total_seconds) % 60;

   daysEl.innerHTML = days;
   hoursEl.innerHTML = format_time(hours);
   minsEl.innerHTML = format_time(mins);
   secondsEl.innerHTML = format_time(seconds);
}

function format_time(time)
{
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown,1000);