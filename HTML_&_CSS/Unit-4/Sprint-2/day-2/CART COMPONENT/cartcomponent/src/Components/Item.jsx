import styles from "./Item.module.css";

export const Item = ({ dish, handleQty }) => {
  return (
    <div className={styles.item}>
      <p>{dish.name}</p>
      <p>Rs: {dish.price}</p>
      <p>
        <button
          disabled={dish.qty === 1}
          onClick={() => handleQty(-1, dish.id)}
        >
          <span>-</span>
        </button>

        {dish.qty}

        <button onClick={() => handleQty(1, dish.id)}>
          <span>+</span>
        </button>
      </p>
      <div className={styles.item}></div>
    </div>
  );
};
