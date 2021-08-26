"use strict";

var secondHand = document.querySelectorAll('.second-hand');
var minsHand = document.querySelectorAll('.min-hand');
var hourHandMinsk = document.querySelector('.hour-hand-minsk');
var hourHandTash = document.querySelector('.hour-hand-tash');
var hourHandBish = document.querySelector('.hour-hand-bish');
var digitalClock = document.querySelector('.digital-clock');
var checkbox = document.querySelector('input[name=theme]');

function setDate() {
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = seconds / 60 * 360 + 90;
  secondHand.forEach(function (el) {
    return el.style.transform = "rotate(".concat(secondsDegrees, "deg)");
  });
  var mins = now.getMinutes();
  var minsDegrees = mins / 60 * 360 + 90;
  minsHand.forEach(function (el) {
    return el.style.transform = "rotate(".concat(minsDegrees, "deg)");
  });
  var hour = now.getHours();
  var hourDegrees = hour / 12 * 360 + 90;
  hourHandMinsk.style.transform = "rotate(".concat(hourDegrees - 60, "deg)");
  hourHandTash.style.transform = "rotate(".concat(hourDegrees, "deg)");
  hourHandBish.style.transform = "rotate(".concat(hourDegrees + 30, "deg)");
  var options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  var digitalValue = now.toLocaleString("en-US", options);
  digitalClock.innerHTML = "Tashkent: ".concat(digitalValue);
}

checkbox.addEventListener('change', function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

var trans = function trans() {
  document.documentElement.classList.add('transition');
  window.setTimeout(function () {
    document.documentElement.classList.remove('transition');
  }, 1000);
};

setInterval(setDate, 1000);