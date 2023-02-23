import styles from "./Landing.module.scss";
import { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarActions } from "../../store/SidebarSlice";

const Landing = () => {
  const dispatch = useDispatch();
  const isSidebar = useSelector((state) => state.sidebar.isSidebarOpen);

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
    dispatch(toggleSidebarActions.toggleSidebar());
  };

  return (
    <div className={styles.container}>
      {<div className={styles.sidebar}>{isSidebar && <SideBar />}</div>}
      <div className={styles.navigation}>
        <div className={styles.logo}>Logo</div>

        {windowWidth <= "768" ? (
          <div className={styles.burger}>
            {!isSidebar ? (
              <img
                onClick={hamburgerHanlder}
                className={styles.menuIcon}
                src={process.env.PUBLIC_URL + "media/images/menu.png"}
                alt="hamburger"
              />
            ) : (
              <img
                onClick={hamburgerHanlder}
                className={styles.menuIcon}
                src={process.env.PUBLIC_URL + "media/images/cross.png"}
              />
            )}
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
