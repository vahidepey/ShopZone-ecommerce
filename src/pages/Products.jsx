
import products from "../data/products"
import { useNavigate } from 'react-router-dom'
import{useState} from 'react'
import './Products.css'

function Products({setCart}){
    const [search , setSearch ]= useState('')
    const [sort ,setSort]=useState('')
const navigate=useNavigate()
const filteredProducts=products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()))
const sortedProducts=[...filteredProducts].sort((a,b)=>{
    if (sort ==='low'){
        return a.price - b.price
    }
    if (sort==='high'){
        return b.price - a.price
    }
    return 0
})
    return(
        <main className="products-page" >
            <h1>products</h1>

            <input  className="product-search" type="text"
            placeholder="Search Products ... "
            value={search}
            onChange = {(e)=>setSearch(e.target.value)}/>

            <select className="product-sort"  value={sort} onChange={(e)=> setSort(e.target.value)}>
                <option value="">Sort by</option>
                <option value="low">price: Low to High </option>
                <option value="high">price: High to Low </option>
            </select>
            
<div className='product-list'>{filteredProducts.length === 0 && (
    <p>No Product found </p>
)} 
            {sortedProducts.map((product) => (
                    <div className='product-card' key={product.id}>
                        <img className='product-image' src={product.image} alt={product.name}/>
                        <h3 onClick={()=> navigate(`/products/${product.id}`)}  >{product.name}</h3>
                        <p className='product-price'>${product.price}</p>

                    <button onClick={() => setCart((prevCart)=>{
                       
                        return[...prevCart, product]
                    })
                   }>Add to Cart
                  </button>
       
      </div>
                ))}
                </div>
        </main>
   ) 
}

export default Products