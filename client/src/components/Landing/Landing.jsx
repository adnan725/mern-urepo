import styles from "./Landing.module.scss";
import { useState } from "react";

const Landing = () => {
  const [isActive, setIsActive] = useState(false);

  const hamburgerHanlder = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.linksWrapper}>
          <ul className={styles.navLinks}>
            <li className={styles.link}>About</li>
            <li className={styles.link}>Project</li>
            <li className={styles.link}>Contant</li>
          </ul>
        </div>
        <div onClick={hamburgerHanlder} className={styles.burger}>
          {!isActive ? (
            <img
              className={styles.menuIcon}
              src={process.env.PUBLIC_URL + "media/images/menu.png"}
            />
          ) : (
            <img
              className={styles.menuIcon}
              src={process.env.PUBLIC_URL + "media/images/cross.png"}
            />
          )}
        </div>
      </div>
      <div className={styles.body}>Body</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};

export default Landing;
