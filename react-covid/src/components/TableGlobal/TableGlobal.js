import styles from "./TableGlobal.module.css";
import data from "../../utils/constants/indonesia";

function DataTable(props) {
  const { data } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Negara</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
            <th>Total</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Indonesia</td>
            <td>{data.indonesia[0].total}</td>
            <td>{data.indonesia[1].total}</td>
            <td>{data.indonesia[2].total}</td>
            <td>
              {data.indonesia[0].total +
                data.indonesia[1].total +
                data.indonesia[2].total}
            </td>
            <td>
              <a href={data.indonesia[0].detail}>Detail</a>
            </td>
          </tr>
          {/* {data.indonesia.map((item, index) => (
          ))} */}
        </tbody>
      </table>
    </>
    //<div className={styles.container}>

    // </div>
  );
}

export default DataTable;
