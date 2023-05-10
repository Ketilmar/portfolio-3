import "./App.css";
import { TopMenu } from "./components/top-menu";
import SideMenu from "./components/sideMenu";
import { MainPage } from "./pages/mainPage";

function App() {

  return (
    <div className="App">
      <TopMenu />
      <SideMenu />
      <MainPage />
    </div>
  );
};

export default App;
