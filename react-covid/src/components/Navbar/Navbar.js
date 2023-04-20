import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <a href="">
              {" "}
              <li className={styles.navbar__item}>Global</li>
            </a>
            <a href="">
              {" "}
              <li className={styles.navbar__item}>Indonesia</li>
            </a>
            <a href="">
              {" "}
              <li className={styles.navbar__item}>Provinsi</li>
            </a>
            <a href="">
              {" "}
              <li className={styles.navbar__item}>About</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
