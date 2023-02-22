import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <img
          className={styles.menuIcon}
          src={process.env.PUBLIC_URL + "media/images/cross.png"}
        />
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.navLinks}>
          <li className={styles.link}>About</li>
          <li className={styles.link}>Project</li>
          <li className={styles.link}>Contant</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
