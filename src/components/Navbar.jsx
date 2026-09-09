import { useNavigate } from 'react-router-dom'
import './Navbar.css'



function Navbar(){
    const navigate = useNavigate()
    return(
        <nav className='navbar'>
            <h2 className='navbar-logo'>Shop Zone</h2>

            <div className='navbar-links'>

                <a href ='/' onClick={(e)=>{
                    e.preventDefault()
                    navigate('/')
                }} > Home</a>


                 <a href="/products" onClick={(e)=>{
                    e.preventDefault()
                    navigate('/products')
                 }} > Products </a>


                  <a href="/cart" onClick={(e)=>{
                    e.preventDefault()
                    navigate('/cart')
}} > Cart </a>
                 
            </div>
        </nav>
    )
}

export default Navbar