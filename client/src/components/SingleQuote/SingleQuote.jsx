import styles from "./SingleQuote.module.scss";
import { useParams } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useState } from "react";
const Spinner = React.lazy(() => import("../Spinner/Spinner"));

const SingleQoute = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const ALL_QUOTES = [
    {
      id: 1,
      author: {
        name: "Adnan",
        email: "adnan@gmail.com",
        date: "01.02.2023",
      },
      article: {
        heading: "Mental Health Awarenes",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libeore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores quaerat nulla impedit commodi. Facilis eaque blanditiis, animi sed unde veritatis! Animi, eum.",
      },
    },
    {
      id: 2,
      author: {
        name: "Hassan",
        email: "hassan@gmail.com",
        date: "19.02.2023",
      },
      article: {
        heading: "Future od Tech Industry",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt .",
      },
    },
    {
      id: 3,
      author: {
        name: "Hamza",
        email: "hamza@gmail.com",
        date: "11.02.2023",
      },
      article: {
        heading: "Supports Effects on Health",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores.",
      },
    },
    {
      id: 4,
      author: {
        name: "Imran",
        email: "imran@gmail.com",
        date: "11.02.2023",
      },
      article: {
        heading: "The World of Web Development",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores.",
      },
    },
    {
      id: 5,
      author: {
        name: "Irfan",
        email: "irfan@gmail.com",
        date: "11.02.2023",
      },
      article: {
        heading: "The future of World's Economy",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis temporibus placeat fugit, et veniam quae reprehenderit libero dignissimos ea at sit tempore voluptatem qui reiciendis, dolore deleniti tenetur minima culpa fuga deserunt ipsum. Cumque minima, necessitatibus maiores.",
      },
    },
  ];

  const params = useParams();
  const quoteParam = +params.id;

  useEffect(() => {
    setIsLoading(true);
    const q = ALL_QUOTES.filter((q) => q.id === quoteParam);
    setQuote(q);
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>{}</div>
          <div className={styles.mainBody}>
            <div className={`${styles.content} ${styles.introduction}`}>
              <h3>Introduction</h3>
              <p>{}</p>
            </div>
          </div>
          <div className={styles.author}>
            <p>Name: {}</p>
            <p>Email: {}</p>
            <p>Publish date: {}</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SingleQoute;
