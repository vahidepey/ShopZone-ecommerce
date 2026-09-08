import products from "../data/products"
import './Cart.css'

function Cart({cart , setCart}){
    const total=cart.reduce(
        (sum,product)=>sum+product.price,0
    )
    const handleRemove = (id)=>{
        setCart((prevCart)=>
        prevCart.filter((product)=>product.id!==id)

        )}

        const handleDecrease=(id)=>{
            setCart((prevCart)=>{
                const index=prevCart.findIndex(
                    (product)=>product.id===id
                )
                if (index===-1){
                    return prevCart
                }
            const newCart=[...prevCart]
            newCart.splice(index,1)
            return newCart
            
            })
    }
    const getQuantity=(id)=>{
        return cart.filter((product)=> product.id===id).length
    }
const uniqueProducts=products.filter((product)=>
cart.some((item)=>item.id===product.id))

    return(
        <main className="cart-page" >
            <h1>Cart</h1>
            <p>{Cart.length} product(s) in Cart</p>

            {uniqueProducts.map((product, index)=>(

                <div className="cart-item"  key= {`${product.id} - ${Math.random()}` }>
                    <h3>{product.name}</h3>
                    <p>${product.price} </p>
                    <p> Quantity:{ getQuantity (product.id)}</p>

                    <div className="quantity-controls" >

                        <button onClick={()=>{
                        setCart((prevCart)=>[...prevCart,product])
                    }}>+</button>

                    <button onClick={()=>{
                        handleDecrease(product.id)
                    }}>-</button>

                    </div>


                    
                    <button onClick={()=>handleRemove(product.id)}>Remove</button>

                </div>
            ))}
            <h2>Total:${total.toFixed(2)} </h2>
            <button onClick={()=>setCart ([])

            }> Clear Cart</button>
             {cart.length===0 && <p>Your cart is empty .</p>}
        </main>
    )
}

export default Cart