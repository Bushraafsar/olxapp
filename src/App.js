import logo from './logo.svg';
import './App.css';
import './Props.css';
import HomePage from './compnent/Home';
import Header from './compnent/Header';
import Footer from './compnent/Footer';
import {BrowserRouter,Route, Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path="/" compnent={HomePage}/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
