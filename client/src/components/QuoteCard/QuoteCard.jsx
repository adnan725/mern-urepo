import styles from "./QuoteCard.module.scss";

const QuoteCard = (props) => {
  const quote = props.quotes;

  return (
    <div className={styles.container}>
      <div className={styles.qouteCard}>
        <div className={styles.heading}>{quote.heading}</div>
        <div className={styles.body}>{quote.content}</div>
        <div className={styles.author}>{`Author: ${quote.name}`}</div>
      </div>
    </div>
  );
};

export default QuoteCard;
