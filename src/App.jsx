import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { useState } from 'react'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'


function App(){
  const [cart, setCart] = useState ([])
  return(
    <BrowserRouter>
  
      <Navbar/>
   <Routes>
     <Route path='/' element={<Home setCart={setCart} />}/>
     <Route path='/Products' element= {<Products setCart={setCart} />}/>
     <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>

    < Route path="/products/:id" element={<ProductDetails setCart={setCart} />}/>
  </Routes>
    </BrowserRouter>
  )
}

export default App