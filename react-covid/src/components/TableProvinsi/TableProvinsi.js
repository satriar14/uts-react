import styles from "./TableProvinsi.module.css";

function TableProvinsi(props) {
  const { data } = props;
  return (
    <div className={styles.container}>
      <table className={styles.container__table}>
        <tr className={styles.container__row}>
          <th className={styles.table__title} style={{ textAlign: "center" }}>
            No
          </th>
          <th className={styles.table__title}>Provinsi</th>
          <th className={styles.table__title_center}>Positif</th>
          <th className={styles.table__title_center}>Sembuh</th>
          <th className={styles.table__title_center}>Dirawat</th>
          <th className={styles.table__title_center}>Meninggal</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index} className={styles.container__content}>
            <td
              className={styles.table__content}
              style={{ textAlign: "center" }}>
              {index + 1}
            </td>
            <td className={styles.table__content}>{item.kota}</td>
            <td className={styles.table__content_numer}>{item.kasus}</td>
            <td className={styles.table__content_numer}>{item.sembuh}</td>
            <td className={styles.table__content_numer}>{item.dirawat}</td>
            <td className={styles.table__content_numer}>{item.meninggal}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TableProvinsi;
