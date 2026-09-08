import{useParams} from 'react-router-dom'
import products  from '../data/products'
import './ProductDetails.css'


function ProductDetails({setCart}){
const {id} = useParams()
const product = products.find(
    (item)=>item.id===Number(id)
)
if (!product){
    return<h1>Product not found</h1>
}

    return(
        <main className='product-details' >
            <div className='product-info'>
            <h1>{product.name}</h1>

            <img src={product.image}
            alt={product.name}/>

            <p>${product.price}</p>

            <button onClick={()=> setCart((prevCart)=>[...prevCart,product])}>Add to Cart</button></div>
        </main>
        
    )
}

export default ProductDetails