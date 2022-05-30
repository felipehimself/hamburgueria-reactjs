import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './shared/globalStyles';
import { Home, Cart } from './pages';
import Topbar from './components/Topbar/Topbar';

const App = () => {
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
