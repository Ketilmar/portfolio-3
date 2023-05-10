import { Routes, Route } from "react-router-dom";
import { Projectlist } from "./projects/projectList";
import { About } from "./about/about";
import { NavAppPage } from "./projects/navApp/NavAppPage";
import { CollatzPage } from "./projects/collatz/collatzPage";
import { Home } from "./home/home";
import { ApiProxyPage } from "./projects/apiProxy/apiProxyPage";
import { KeystonePage } from "./projects/keystone/keystonePage";
import {elementHider} from "../components/elementHider"
import React from "react";

const MainPage = () => {

  React.useEffect(() => {
    const element1 = document.getElementsByClassName("mainpage-wrapper");
    console.log(element1);
    element1[0].addEventListener("scroll", elementHider);
  }, []);

  return (
    <div className="mainpage-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectlist" element={<Projectlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/navapppage" element={<NavAppPage />} />
        <Route path="/collatzpage" element={<CollatzPage />} />
        <Route path="/apiproxypage" element={<ApiProxyPage />} />
        <Route path="/keystonepage" element={<KeystonePage />} />
      </Routes>
    </div>
  );
};

export { MainPage };
