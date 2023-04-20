import DataTable from "../TableGlobal/TableGlobal";
import styles from "./Global.module.css";
import data from "../../utils/constants/indonesia";
import Card from "../Card/Card";

function Global() {
  return (
    <div className={styles.container}>
      <section className={styles.global}>
        <h1 className={styles.global__title}>Global</h1>
        <span>Data Covid secara Global</span>
        <div className={`${styles.container} ${styles.global__cards}`}>
          {data.indonesia.map((item, index) => (
            <Card
              key={index}
              data={item.total}
              status={item.status}
              color={
                index === 0 ? "#2a9d8f" : index === 1 ? "#118AB2" : "#EF476F"
              }
            />
          ))}
          {/* <Card
            data={data.indonesia[0].total}
            status={data.indonesia[0].status}
            color="#2a9d8f"
          />
          <Card
            data={data.indonesia[1].total}
            status={data.indonesia[1].status}
            color="#118AB2"
          />
          <Card
            data={data.indonesia[2].total}
            status={data.indonesia[2].status}
            color="#EF476F"
          /> */}
        </div>
      </section>
    </div>
  );
}

export default Global;
