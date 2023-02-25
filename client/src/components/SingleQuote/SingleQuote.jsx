import styles from "./SingleQuote.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const SingleQoute = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const ALL_QUOTES = [
    {
      id: 1,
      name: "Adnan",
      email: "adnan@gmail.com",
      date: "01.02.2023",
      heading: "Mental Health Awarenes",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libeore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores quaerat nulla impedit commodi. Facilis eaque blanditiis, animi sed unde veritatis! Animi, eum.",
    },
    {
      id: 2,

      name: "Hassan",
      email: "hassan@gmail.com",
      date: "19.02.2023",
      heading: "Future od Tech Industry",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt .",
    },
    {
      id: 3,
      name: "Hamza",
      email: "hamza@gmail.com",
      date: "11.02.2023",
      heading: "Supports Effects on Health",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores.",
    },
    {
      id: 4,
      name: "Imran",
      email: "imran@gmail.com",
      date: "11.02.2023",
      heading: "The World of Web Development",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores.",
    },
    {
      id: 5,
      name: "Irfan",
      email: "irfan@gmail.com",
      date: "11.02.2023",
      heading: "The future of World's Economy",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores.",
    },
  ];

  const params = useParams();
  const quoteParam = +params.id;

  useEffect(() => {
    const q = ALL_QUOTES.filter((q) => q.id === quoteParam);
    setQuote(q[0]);
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.heading}>{quote.heading}</div>
            <div className={styles.mainBody}>
              <div className={`${styles.content} ${styles.introduction}`}>
                <h3>Introduction</h3>
                <p>{quote.content}</p>
              </div>
            </div>
            <div className={styles.author}>
              <p>Name: {quote.name}</p>
              <p>Email: {quote.email}</p>
              <p>Publish date: {quote.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleQoute;
