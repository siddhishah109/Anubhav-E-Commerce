import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom"
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about'element={<About/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
