import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';
import Course from './components/pages/Course';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Practice from './components/pages/Practice';
import Community from './components/pages/Community';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/course' element={<Course />} />
          <Route exact path='/practice' element={<Practice />} />
          <Route exact path='/community' element={<Community />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


