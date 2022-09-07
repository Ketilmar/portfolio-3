// // med denne metoden er myId=HTMLElement når jeg laster siden (f5). Men her får jeg ikke pushet classname til DOM
// // const myId = document.getElementsByClassName(".topmenu-wrapper");

// // med denne metoden er myId=null når jeg laster siden (f5). Fungerer når jeg gjør endringer her og lagrer (uten å laste med f5)
// const myId = document.querySelector(".topmenu-wrapper");
// // console.log(myId);

// // this hides topmenu when scroll down
// let hideMenu = () => {
//   // const myId = document.querySelector(".topmenu-wrapper");
//   let y = window.scrollY;
//   if (y >= 300) {
//     myId.className = "topmenu-wrapper hide";
//     // console.log("SKJUL: ", myId);
//     // console.log(myId);
//   } else {
//     myId.className = "topmenu-wrapper show";
//     // console.log("VIS: ", myId);
//   }
// };

// window.addEventListener("scroll", hideMenu);

const TopMenu = () => {
  return <div className="topmenu-wrapper">dette er top menyen</div>;
};

export { TopMenu };
