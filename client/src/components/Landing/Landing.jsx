import styles from "./Landing.module.scss";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

const Landing = () => {
  const [isActive, setIsActive] = useState(false);

  const hamburgerHanlder = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.navigation}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.linksWrapper}>
          <ul className={styles.navLinks}>
            <li className={styles.link}>About</li>
            <li className={styles.link}>Project</li>
            <li className={styles.link}>Contant</li>
          </ul>
        </div>
        {/*  <div onClick={hamburgerHanlder} className={styles.burger}>
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
        </div> */}
      </div>
      <div className={styles.body}>
        <div className={styles.bodyWrapper}>
          <div className={styles.headingWrapper}>
            <p className={styles.welcome}>WELCOME</p>
            <p className={styles.heading}>
              To The Most Sought After Plateform For Reading Your Dream Quotes
            </p>
          </div>
          <div className={styles.actions}>
            <button>Quotes page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
