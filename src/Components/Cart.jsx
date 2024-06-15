import { useEffect, useState } from "react";
import "./Cart.css"

const Cart = ({ cart,product,setCart }) => {
    const [totalAmount, setTotalAmount] = useState(0)
    // component created for for total amount 
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=> acc+parseInt(curr.price),0))
    },[cart])
    return (
        <>
            <div className="Cart-Container">
                <h1 className="Cart-heading">
                    Cart_Page
                </h1>
                {cart.map((product) => (
                    <div className="cart-Products" key={product.id}>
                        <div className="cart-Img-box">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="Cart-product-details">
                            <h2 className="cart-product-name">{product.name}</h2>
                            <h3 className="cart-pro-price"> <b style={{color:"lightslategray"}}>price: <b style={{color:"Black"}}>₹</b> </b>{product.price}</h3>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <h1>Total_price  ₹ : {totalAmount} /-</h1>
                </div>
            </div>
        </>
    );
}

export default Cart;