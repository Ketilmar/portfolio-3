const myId = document.querySelector(".topmenu-wrapper");
// console.log(myId.className);

// this hides topmenu when scroll down
let hideMenu = function () {
  let y = window.scrollY;
  if (y >= 300) {
    myId.className = "topmenu-wrapper hide";
  } else {
    myId.className = "topmenu-wrapper show";
  }
};

window.addEventListener("scroll", hideMenu);

const TopMenu = () => {
  return <div className="topmenu-wrapper">dette er top menyen</div>;
};

export { TopMenu };
