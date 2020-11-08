const userText = [
    "ok, I've started",
    "I need finish this",
    "fixed padding",
    "I hate make up a website"
]
window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const userTextSpan = document.querySelector('.Prompt__text')


    userText.forEach((text, index) => {

        setTimeout(() => {
            userTextSpan.textContent = text
        }, index * 2000)
    })
})