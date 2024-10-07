import { useContext } from "react";
import "./Cart.css";
import DataContext from "../state/DataContext";

function Cart() {
    const { cart } = useContext(DataContext);

    function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            total += (prod.quantity * prod.price);
        }

        return total.toFixed(2);
    }

    return (
        <div className="cart page">
            <h1>If your basket complete? <i class="fa-solid fa-basket-shopping"></i></h1>
            <h4>Let's proceed to payment of your <b>{cart.length}</b> items.</h4>

            <div className="parent">
                <div className="list">
                    {
                        cart.length == 0?
                        <div className="alert alert-primary">
                            <h3>Go to Catalog and add product there!</h3>
                        </div>
                        : null
                    }
                    <div className="cat">
                        <h5>Product</h5>

                        <label>Price</label>
                        <label>Qty</label>
                        <label>Total</label>
                        <spam className="empty"></spam>
                    </div>
                    {cart.map(prod =>
                        <div className="prod-cart" key={prod.id}>
                            <img src={prod.image} alt="" />
                            <h5>{prod.title}</h5>
                            <label>${prod.price}</label>
                            <label>#{prod.quantity}</label>
                            <label>${prod.price * prod.quantity}</label>
                            <button className="btn btn-sm btn-trash"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    )}
                </div>
                <div className="side">
                    <h4>Total</h4>
                    <h3>${getTotal()}</h3>

                    <button className="btn btn-primary">Proceed to payment</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;