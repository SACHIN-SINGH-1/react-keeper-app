import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import KeeperApp from "./components/KeeperApp";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    
    <div>
      <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<KeeperApp />} />
            <Route path='/test' element={'It is a Test Route!'} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}


export default App;