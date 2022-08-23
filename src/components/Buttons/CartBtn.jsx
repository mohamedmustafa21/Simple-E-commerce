import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../.././App.css";

function CartBtn({ cart }) {
  const [CART, setCATR] = useState([]);
  useEffect(() => {
    setCATR(cart);
  }, [cart]);
  return (
    <div className="container">
      {CART?.map((cardItem, cardIndex) => {
        return (
          <div className="mt-3">
            <img key={cardItem.id} src={cardItem.img} width={150} />
            <span className="me-2">{cardItem.title}</span>
            <button
              className="btn btn-danger me-2"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cardIndex === index
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                    : item;
                });
                setCATR(_CART);
              }}
            >
              {" "}
              -{" "}
            </button>
            <span className="fw-bold me-2">{cardItem.quantity}</span>
            <button
              className="btn btn-danger me-2"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cardIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCATR(_CART);
              }}
            >
              {" "}
              +{" "}
            </button>
            <span>Price : ${cardItem.price * cardItem.quantity}</span>
          </div>
        );
      })}
      <h3 className="text-center total-price ">
        {" "}
        <span className="fw-bold">Total : </span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
        $
      </h3>
    </div>
  );
}

export default CartBtn;
