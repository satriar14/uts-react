import styles from "./Card.module.css";

function Card(props) {
  const { data, status, color } = props;
  const formattedData = data.toLocaleString();
  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <h2 className={styles.card__title}>{status}</h2>
        <h1 className={styles.card__total} style={{ color: color }}>
          {formattedData}
        </h1>
      </div>
    </div>
  );
}

export default Card;
