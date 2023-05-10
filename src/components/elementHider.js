
const myId = document.getElementsByClassName("topmenu-wrapper");
let lastKnown = 0;

/** enables you to hide menu on down scroll and immediately show on scroll up */
let elementHider = () => {

  let y = window.scrollY;
  console.log(window.scrollY);
  if (y > lastKnown) {
    lastKnown = y;
    myId[0].className = "topmenu-wrapper  hide";
    console.log("trigger hide");
  } else {
    lastKnown = y;
    myId[0].className = "topmenu-wrapper  show";
    console.log("trigger show");
  }
};

// import in the component to hide
export { elementHider };
