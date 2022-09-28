import "./App.css";
import SideMenu from "./components/sideMenu";
import { MainPage } from "./pages/mainPage";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <MainPage />
    </div>
  );
}

export default App;
