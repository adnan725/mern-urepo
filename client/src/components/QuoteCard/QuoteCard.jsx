import styles from "./QuoteCard.module.scss";

const QuoteCard = (props) => {
  const quote = props.quote;

  return (
    <div className={styles.container}>
      <div className={styles.qouteCard}>
        <div className={styles.heading}>{quote.heading}</div>
        <div className={styles.body}>{quote.content}</div>
        <div className={styles.author}>
          <span>{`Author: ${quote.name}`}</span>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
