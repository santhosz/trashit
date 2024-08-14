import "../../assets/styles/CartPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../user/CartContext";

const CartPage = () => {
    const { cart, cartCount, notification, removeFromCart, addToCart } = useCart();
    const navigate = useNavigate(); // Hook for navigation

    const handleIncreaseQuantity = (item) => {
        addToCart(item); // Add one more of the same item to the cart
    };

    const handleDecreaseQuantity = (item) => {
        // Check if the item quantity is greater than 1 before removing
        if (item.quantity > 1) {
            addToCart(item); // Adjust this to increase quantity if needed
        } else {
            removeFromCart(item); // If quantity is 1, just remove the item from cart
        }
    };

    const handleBuyNow = () => {
        navigate('/buynow'); // Navigate to Buynow page
    };

    return (
        <div className="cart-page">
            <h1>CART PAGE</h1>
            <p>ITEMS IN CART: {cartCount}</p>
            {notification && <div className="notification">{notification}</div>}
            <ul>
                {cart.map((item, index) => (
                    <li key={index} className="cart-item">
                        <img src={item.img} alt={item.productName} className="cart-item-img" />
                        <div className="cart-item-details">
                            <h3>{item.productName}</h3>
                            <p>Coins needed: {item.coins}</p>
                            <div className="quantity-controls">
                                <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                            </div>
                            <div className="action-buttons">
                                <button className="remove-button" onClick={handleBuyNow}>BuyNow</button>
                                <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;