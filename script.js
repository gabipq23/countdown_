import Countdown from './countdown.js';

const tempoParaShowTaylor = new Countdown ('17 November 2023 18:30:00 GMT-0300');

setInterval(() => {

    document.getElementById("days").innerHTML = tempoParaShowTaylor.total.days;
    document.getElementById("hours").innerHTML = tempoParaShowTaylor.total.hours;
    document.getElementById("minutes").innerHTML = tempoParaShowTaylor.total.minutes;
    document.getElementById("seconds").innerHTML = tempoParaShowTaylor.total.seconds;

}, 1000)