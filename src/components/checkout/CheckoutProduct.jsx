import React from "react";
import styles from "./checkoutproduct.module.css"
import { useStateValue } from "@/providers/StateProvider";

function CheckoutProduct({ id, image, title, price}) {
  const [{ basket }, dispatch] = useStateValue(); //Used to pull in information from data layer

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className={styles.checkoutProduct}>
      <img
        src={image}
        className={styles.image}
        alt="checkoutproduct-image"
      />

      <div className={styles.checkoutInfo}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              <p></p>;
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
