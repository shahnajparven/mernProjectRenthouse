import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = ({ history }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };


    //   const checkoutHandler = () => {
    //     history.push("/login?redirect=shipping");
    //   };

    return (
        <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          
          <RemoveShoppingCartIcon />

          <Typography>No Item in Your Cart</Typography>
          <Link to="/products">View Items</Link>
        </div>
      ) : (
        <Fragment>

            <p>..</p>
            <p>..</p>


            <div className="cartPage">

                {cartItems &&
                    cartItems.map((item) => (
                        <div className="cartContainer" key={item.product}>
                            <CartItemCard item={item} deleteCartItems={deleteCartItems} />

                        </div>
                    ))}
                <div className="cartGrossProfit">
                    <div></div>

                    <div className="checkOutBtn">
                        <button>Check Out</button>
                    </div>
                </div>
            </div>
        </Fragment>
 )}
 </Fragment>
    );
};

export default Cart;