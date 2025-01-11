import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import KeeperApp from "./components/KeeperApp";


function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/react-keeper-app' element={<KeeperApp/>} />
            <Route path='/test' element={'It is a Test Route!'} />
          </Routes>
        </Router>
    </div>
  );
}


export default App;