import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './shared/globalStyles';
import { Home, Cart } from './pages';
import Topbar from './components/Topbar/Topbar';

import data from './utils/data';
const App = () => {

  useEffect(()=>{
    const isStoraged = JSON.parse(localStorage.getItem('data')!)
    if(!isStoraged){
      localStorage.setItem('data', JSON.stringify(data));
    }


  },[])

  return (
    <>
      <GlobalStyles />
      <Router>
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
