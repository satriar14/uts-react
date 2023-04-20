import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.footer__author}>Copyright @2023</p>
      </footer>
    </div>
  );
};

export default Footer;
