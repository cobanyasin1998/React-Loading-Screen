import { Feed } from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import { Topbar } from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="container">
      <>
        <Sidebar />

        <div className="home">
          <Topbar/>
          <Feed/>
        </div>
      </>
    </div>
  );
}

export default App;
