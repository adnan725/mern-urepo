import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <span className={styles.tileOne}></span>
        <span className={styles.tileTwo}></span>
        <span className={styles.tileThree}></span>
        <span className={styles.tileFour}></span>
      </div>
    </div>
  );
};

export default Spinner;
