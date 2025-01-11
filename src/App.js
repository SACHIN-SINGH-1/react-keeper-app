// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import KeeperApp from "./components/KeeperApp";
// import Header from "./components/Header";
// import Footer from "./components/Footer";


function App() {
  return (
    <KeeperApp/>
    // <div>
    //   <Router basename="/react-keeper-app">
    //       <Routes>
    //         <Route path='/' element={<center><h1>Welcome Home!!</h1></center>} />
    //         <Route path='/keeper-app' element={<KeeperApp />} />
    //         <Route path='/test' element={'It is a Test Route!'} />
    //       </Routes>
    //     </Router>
    // </div>
  );
}


export default App;