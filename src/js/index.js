const scenaries = [
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

  {id:12, text: "Ok, i need to center this element...", isUser: true, clearPrev: true},
  {id:13, text: "margin: 0 auto?", isUser: true, clearPrev: true},
  {id:14, text: "No...", isUser: false, clearPrev: false},
  {id:15, text: "You can't", isUser: false, clearPrev: false},
  {id:16, text: "...You forced me", isUser: true, clearPrev: false},
  {id:17, text: ".center{", isUser: true, clearPrev: true},
  {
    id: 18,
    text:
      ".center{</br>" +
      "&nbsp;&nbsp;text-align:center;</br>" +
      "&nbsp;&nbsp;align-items:center;</br>"+
      "&nbsp;&nbsp;align-self:center;</br>"+
      "&nbsp;&nbsp;justify-items:center;</br>"+
      "&nbsp;&nbsp;justify-self:center;</br>"+
      "&nbsp;&nbsp;justify-content:center;</br>"+
      "&nbsp;&nbsp;place-items:center;</br>"+
      "&nbsp;&nbsp;vertical-align:center;</br>"+
      "&nbsp;&nbsp;line-height:100%;</br>"+
      "&nbsp;&nbsp;margin:auto;</br>"+
      "&nbsp;&nbsp;position:absolute;</br>"+
      "&nbsp;&nbsp;position:absolute;</br>"+
      "&nbsp;&nbsp;left:50%;</br>"+
      "&nbsp;&nbsp;right:50%;</br>"+
      "&nbsp;&nbsp;transform: translate(-50%, -50%);</br>"+
      "}",
    isUser: true,
    clearPrev: false,
  },
  { id: 19, text: "Okey, okey, I'm centred it", isUser: false, clearPrev: true },
  { id: 20, text: "Thank you", isUser: true, clearPrev: true },
  { id: 21, text: "....", isUser: true, clearPrev: true },
  { id: 22, text: "....", isUser: false, clearPrev: true },
  {
    id: 23,
    text: "This website created with Vanila JS, CSS Grid and HTML5",
    isUser: true,
    clearPrev: true,
  },
  { id: 24, text: "Thank you for watch", isUser: true, clearPrev: true },
  { id: 25, text: "To be continued...", isUser: true, clearPrev: true },
];
const showDate = () => {
  const dateEl = document.querySelector(".header__date");
  const currentDate = new Date();
  dateEl.textContent = currentDate.toLocaleString("en", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  showDate();
  setInterval(showDate, 60000);
  const userTextSpan = document.querySelector(".Prompt__text");
  const systemTextSpan = document.querySelector(".Terminal__text");

  scenaries.forEach((item, index) => {
    setTimeout(() => {
      if (item.clearPrev) {
        userTextSpan.textContent = "";
        systemTextSpan.textContent = "";
      }
      if (item.isUser) {
        userTextSpan.innerHTML = item.text;
      } else {
        systemTextSpan.innerHTML = item.text;
      }
    }, index * 4000);
  });
});
