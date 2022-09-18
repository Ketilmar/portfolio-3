const myId = document.getElementsByClassName("topmenu-wrapper");
let lastKnown = 0;

/** enables you to hide menu on down scroll and immediately show on scroll up */
let hideMenu = () => {
  let y = window.scrollY;
  if (y > lastKnown) {
    lastKnown = y;
    myId[0].className = "topmenu-wrapper  hide";
  } else {
    lastKnown = y;
    myId[0].className = "topmenu-wrapper  show";
    console.log("trigger show");
  }
};

// har importert i mainPage.js
export { hideMenu };
