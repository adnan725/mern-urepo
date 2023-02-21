import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.linksWrapper}>
          <ul className={styles.navLinks}>
            <li>About</li>
            <li>Project</li>
            <li>Contant</li>
          </ul>
        </div>
        <div className={styles.burger}>Hamburger</div>
      </div>
      <div className={styles.body}>Body</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};

export default Landing;
