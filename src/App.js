import './App.css';
import { HashRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Projects from "./components/Projects"

function App() {
  if (window.location.pathname === "/pdf.worker.js") {
    return <div /> // must return at least an empty div
  } else {
    return (
      <div>
      <HashRouter baseurl="/">
        <NavBar />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </HashRouter>
      </div>
  );
   }
}

export default App;