import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import ScrollToHash from './Components/ScrollToHash.jsx'
import Home from './Pages/Home.jsx'
import Menu from './Pages/Menu.jsx'
import Cart from './Pages/Cart.jsx'

function App () {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </>
  );
  
}
export default App;
