import { useContext, useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import DataContext from "../state/DataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    const addToCart = useContext(DataContext).addProductToCart;

    function add() {
        let prod = {...props.data, quantity: quantity};
        addToCart(prod);
    }

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product">
            <img src={props.data.image} alt=""></img>

            <h4>{props.data.title}</h4>
            <div className="prices">
                <label className="total">Total <br></br><span>${getTotal()}</span></label>
                <label className="price">Price <br></br><span>${props.data.price.toFixed(2)}</span></label>
            </div>

            <div className="controls">

                <QuantityPicker onChange={handleQuantity}></QuantityPicker>
                <button className="btn btn-custom" onClick={add}>
                    Add
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>

        </div>
    );
}

export default Product;