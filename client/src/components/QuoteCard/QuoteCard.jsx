import styles from "./QuoteCard.module.scss";

const QuoteCard = (props) => {
  const quote = props.props;

  return (
    <div className={styles.container}>
      <div className={styles.qouteCard}>
        <div className={styles.heading}>{quote.article.heading}</div>
        <div className={styles.body}>{quote.article.content}</div>
        <div className={styles.author}>{`Author: ${quote.author.name}`}</div>
      </div>
    </div>
  );
};

export default QuoteCard;
