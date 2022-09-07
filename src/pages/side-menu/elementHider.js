// med denne metoden er myId=HTMLElement når jeg laster siden (f5). Men her får jeg ikke pushet classname til DOM
const myId = document.getElementsByClassName("topmenu-wrapper");
console.log(myId);

// this hides topmenu when scroll down
let hideMenu = () => {
  let y = window.scrollY;
  if (y >= 300) {
    myId[0].className = "topmenu-wrapper  hide";
  } else {
    myId[0].className = "topmenu-wrapper  show";
  }
};

// har importert i mainPage.js
export { hideMenu };
