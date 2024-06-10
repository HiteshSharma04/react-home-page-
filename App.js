// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Learn from './component/jsx/learn';
import Reference from './component/jsx/reference';
import Blog from './component/jsx/blog';
import Community from './component/jsx/community';
import Crud from './component/jsx/crud/crud';
import Add from './component/jsx/crud/add';
import Update from './component/jsx/crud/update';
import 'C:/Users/hp/Desktop/React_project/hit/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Navbar from './nav';
import Home from './home';
import Footer from './footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [black,setBlack] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleblack = () => {
    setBlack(!black);
  };
  return (
    <div className={`App  ${isDarkMode ? 'bg-dark' : 'bg-light'} ${black ? 'text-white' : 'text-dark'}` }>
      <Router>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} black={black} toggleblack={toggleblack}/>
        <Routes>
        <Route path='/learn' element={<Learn/>} />
        <Route path='/reference' element={<Reference/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/crud' element={<Crud/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/nav' element={<Navbar/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/footer' element={<Footer/>}/>
        </Routes><br />
        <Link to={'/home'}></Link>
        <Footer />

      </Router>
      
      
    </div>
  );
}

export default App;
