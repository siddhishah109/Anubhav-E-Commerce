import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/home';
import About from './components/about';
import AdminLogin from './components/Admin/adminLogin';
import AdminHomePage from './components/Admin/adminHomePage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about'element={<About/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin-home' element={<AdminHomePage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
