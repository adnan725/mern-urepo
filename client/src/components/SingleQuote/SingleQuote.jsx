import styles from "./SingleQuote.module.scss";

const SingleQoute = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Lorem ipsum dolor sit amet consectetur adipisicing ipsa?
        </div>
        <div className={styles.mainBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
          mollitia magnam reiciendis, officiis deleniti? Quaerat quas dicta
          beatae libero inventore amet. Corporis minima accusamus culpa, non
          dolorem ut rerum vero beatae quis corrupti quibusdam illum natus
          libero perspiciatis velit quod delectus
        </div>
        <div className={styles.author}>
          <p>Name:</p>
          <p>Published on:</p>
        </div>
      </div>
    </div>
  );
};

export default SingleQoute;
