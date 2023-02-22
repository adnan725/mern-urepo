import styles from "./Landing.module.scss";
import { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";

const Landing = () => {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const hamburgerHanlder = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>{isActive && <SideBar />}</div>
      <div className={styles.navigation}>
        <div className={styles.logo}>Logo</div>

        {windowWidth <= "768" ? (
          <div onClick={hamburgerHanlder} className={styles.burger}>
            <img
              className={styles.menuIcon}
              src={process.env.PUBLIC_URL + "media/images/menu.png"}
            />
          </div>
        ) : (
          <div className={styles.linksWrapper}>
            <ul className={styles.navLinks}>
              <li className={styles.link}>About</li>
              <li className={styles.link}>Project</li>
              <li className={styles.link}>Contant</li>
            </ul>
          </div>
        )}
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
