import styles from "./QuoteCard.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const QuoteCard = (props) => {
  const quote = props.quote;

  const deleteQuoteHandler = async (id) => {
    const url = `http://localhost:3001/quotes/${id}`;
    try {
      const responce = axios.delete(url);
      console.log(responce);
    } catch (error) {
      console(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.qouteCard}>
        <div className={styles.heading}>
          <span>{quote.heading}</span>
          <Link
            to={`/quotes/${quote._id}`}
            className={styles.link}
            key={quote.id}
          >
            Read
          </Link>
        </div>
        <div className={styles.body}>{quote.content}</div>
        <div className={styles.author}>
          <span>{`Author: ${quote.name}`}</span>
          <button onClick={() => deleteQuoteHandler(quote._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
