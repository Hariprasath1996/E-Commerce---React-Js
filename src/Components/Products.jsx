import "./product.css"

const Product = ({ product, cart, setCart }) => {
    const addCart=()=>{
        setCart([...cart,product])
    }
    const removeCart =()=>{
        setCart(cart.filter((cart)=>cart.id !== product.id))
    }
    return (
        <>
            <div className="product">
                <h2>{product.name}</h2>
                <div className="img-box">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="pro-details">
                    <h4>price: ₹{product.price}</h4>
                    {cart.includes(product) ? (
                        <button className="btn-remove" onClick={removeCart}><b>Remove From Cart</b></button>) : (<button onClick={addCart}><b>Add To Cart</b></button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Product;