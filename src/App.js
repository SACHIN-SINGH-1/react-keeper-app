import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import KeeperApp from "./components/KeeperApp";


function App() {
  return (
    <div>
      <Router basename="/react-keeper-app">
          <Routes>
            <Route path='/' element={<KeeperApp/>} />
            <Route path='/test' element={'It is a Test Route!'} />
          </Routes>
        </Router>
    </div>
  );
}


export default App;