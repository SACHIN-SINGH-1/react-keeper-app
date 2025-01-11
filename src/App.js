import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import KeeperApp from "./components/KeeperApp";


function App() {
  return (
    <div>
    <KeeperApp/>
      <Router basename="/react-keeper-app">
          <Routes>
            <Route path='/' element={<center><h1>Welcome Home!!</h1></center>} />
            <Route path='/keeper-app' element={<KeeperApp />} />
            <Route path='/test' element={'It is a Test Route!'} />
          </Routes>
        </Router>
    </div>
  );
}


export default App;