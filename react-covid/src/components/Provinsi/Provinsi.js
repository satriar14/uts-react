import DataTable from "../TableProvinsi/TableProvinsi";
import styles from "./Provinsi.module.css";
import data from "../../utils/constants/provinces";
import { useState } from "react";
import TableProvinsi from "../TableProvinsi/TableProvinsi";

function Provinsi(props) {
  const { data } = props;
  return (
    <div className={styles.container}>
      <section className={styles.provinsi}>
        <h1 className={styles.provinsi__title}>Data Provinsi</h1>
        <span>Data Covid berdasarkan Provinsi</span>
        <TableProvinsi data={data} />
        {/* <button onClick={tambahData}>Add data</button> */}
      </section>
    </div>
  );
}

export default Provinsi;
