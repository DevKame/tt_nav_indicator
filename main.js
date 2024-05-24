"use strict";
const nav = document.querySelector("nav");
const spans = document.querySelectorAll("span");
const indicator = document.querySelector(".indicator");

spans.forEach(span => {
    span.addEventListener("click", setActive);
});

//set indicator fpr initial loading
indicator.style.width = `${spans[0].clientWidth - 10}px`;
indicator.style.left = `${spans[0].offsetLeft + 5}px`;


function setActive({target: span}) {
    spans.forEach(span => span.classList.remove("active"));
    span.classList.add("active");
    let width = span.clientWidth;
    indicator.style.width = `${width - 10}px`;
    indicator.style.left = `${span.offsetLeft + 5}px`;
}