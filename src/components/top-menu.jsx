const TopMenu = () => {
  let myId = document.querySelector(".topmenu-wrapper");
  // console.log(myId);

  let doSomething = function () {
    let y = window.scrollY;
    if (y >= 800) {
      myId.className = "cta show";
    } else {
      myId.className = "cta hide";
    }
  };

  window.addEventListener("scroll", doSomething);

  // console.log(myId.className);
  return (
    <div className="topmenu-wrapper">
      <div> dette er top menyen</div>
    </div>
  );
};

export { TopMenu };
