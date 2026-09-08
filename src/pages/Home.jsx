
import './Home.css'
import products from '../data/products'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero2.jpg'


function Home({setCart}) {
    const navigate=useNavigate()
    return (
        <main className="home">
           <section className="hero">
                <div className="hero-content">
                         <h1> Discover your style</h1>
                         <p>Latest trends , Best picks</p>
                         <button onClick={()=>navigate('/products')} > Shop Now</button>
                </div>
                <img className='hero-image'
                src={heroImage}
                alt='ShopZone fashion collection'  />
                
           </section>
           <section className='categories'>
          
            <div className='category-list'>
                <div className='category-card'>Women</div>
                 <div className='category-card'>Men</div>
                  <div className='category-card'>Shoes</div>
                   <div className='category-card'>Accessories</div>
            </div>

           </section>

<div className='product-list'>
            
                {products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <img className='product-image' src={product.image} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <p className='product-price'>${product.price}</p>

                    <button onClick={() => { setCart((prevCart)=>[...prevCart, product])}}> Add to Cart</button>
        
</div>
       ))}       
      </div>
      

</main>
    )}
export default Home