


const scenaries=[
    {id:1, text: "yarn add", isUser: true, clearPrev: false},
    {id:2, text: "System: ...", isUser: false, clearPrev: false},
    {id:3, text: "System: succes", isUser: false, clearPrev: true},
    {id:4, text: "bad padding and I need to set this image for center", isUser: true, clearPrev: true},
    {id:5, text: "I'm fixing it", isUser: true, clearPrev: true},
    {id:6, text: "System: ok, i move all blocks in space", isUser: false, clearPrev: true},
    {id:7, text: "...", isUser: true, clearPrev: false},
    {id:8, text: "I hate make up a website", isUser: true, clearPrev: false},
    {id:9, text: "I hate programing", isUser: true, clearPrev: false},
    {id:10, text: "fixed it", isUser: true, clearPrev: true},
    {id:11, text: "I like programming", isUser: true, clearPrev: true},
    {id:11, text: "This website created with Vanila JS, CSS Grid and HTML5", isUser: true, clearPrev: true},
    {id:12, text: "Thank you for watch", isUser: true, clearPrev: true},
    {id:13, text: "To be continued...", isUser: true, clearPrev: true},
]
const showDate=()=>{
    const dateEl=document.querySelector('.header__date')
    const currentDate=new Date()
    dateEl.textContent=currentDate.toLocaleString('en',
    {weekday:"long", hour:"2-digit", minute: "2-digit", hour12:false}
    );
}

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    showDate();
    setInterval(showDate, 60000)
    const userTextSpan = document.querySelector('.Prompt__text')
    const systemTextSpan=document.querySelector('.Terminal__text')

    scenaries.forEach((item, index) => {
        setTimeout(() => {
            if(item.clearPrev){
                userTextSpan.textContent=""
                systemTextSpan.textContent=""
            }
            if(item.isUser){
                userTextSpan.textContent=item.text
            }else{
                systemTextSpan.textContent=item.text
            }
        }, index * 4000)
    })
})