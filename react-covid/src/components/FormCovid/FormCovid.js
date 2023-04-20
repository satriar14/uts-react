import { useEffect, useState } from "react";
import styles from "./FormCovid.module.css";
import illustration from "../../assets/illustration/form_covid.svg";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function FormCovid({ data, onSubmit }) {
  const [provinces, setProvinces] = useState(data);
  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [isProvError, setIsProvError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleProvinsi(event) {
    setProvinsi(event.target.value);
  }

  function handleStatus(event) {
    setStatus(event.target.value);
  }

  function handleJumlah(event) {
    setJumlah(event.target.value);
  }

  function handleSubmit(event) {
    if (!status) {
      setIsStatusError(true);
    } else if (!provinsi) {
      setIsProvError(true);
    } else if (!jumlah) {
      setIsJumlahError(true);
    }

    // if (!status || !provinsi || !jumlah) {
    //   setIsStatusError(true);
    //   setIsProvError(true);
    //   setIsJumlahError(true);
    // }
    console.log("{ status, jumlah, provinsi }", { status, jumlah, provinsi });
    event.preventDefault();
    onSubmit({ status, jumlah, provinsi });
  }

  useEffect(() => {
    console.log("DATA", provinces);
  }, [provinces]);

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src={illustration}
            alt="placeholder"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__container}>
              {/* <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="Title">
                  Provinsi
                </label>
                <input
                  className={styles.form__input}
                  type="text"
                  name="Provinsi"
                  id="Provinsi"
                  placeholder="Masukan nama Provinsi"
                  value={provinsi}
                  onChange={handleProvinsi}
                />
              </div> */}

              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="Title">
                  Provinsi
                </label>
                <select
                  className={`${styles.form__select}`}
                  onChange={handleProvinsi}
                  value={provinsi}>
                  <option value="">-- Pilih Provinsi --</option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province.kota}>
                      {province.kota}
                    </option>
                  ))}
                </select>
                {selectedProvince && (
                  <div>
                    <h3>{selectedProvince}</h3>
                    <p>
                      Kasus:{" "}
                      {provinces.find((p) => p.kota === selectedProvince).kasus}
                    </p>
                    <p>
                      Sembuh:{" "}
                      {
                        provinces.find((p) => p.kota === selectedProvince)
                          .sembuh
                      }
                    </p>
                    <p>
                      Meninggal:{" "}
                      {
                        provinces.find((p) => p.kota === selectedProvince)
                          .meninggal
                      }
                    </p>
                    <p>
                      Dirawat:{" "}
                      {
                        provinces.find((p) => p.kota === selectedProvince)
                          .dirawat
                      }
                    </p>
                  </div>
                )}
              </div>
              {isProvError ? (
                <Alert color="red">
                  <p>Data wajib diisi!</p>
                </Alert>
              ) : (
                ""
              )}

              {/* <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="Title">
                  Status
                </label>
                <input
                  className={styles.form__input}
                  type="option"
                  id="status"
                  name="status"
                  placeholder="Masukan status"
                  value={status}
                  onChange={handleStatus}
                />
              </div> */}

              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="Title">
                  Status
                </label>
                <select
                  className={`${styles.form__select}`}
                  onChange={handleStatus}
                  value={status}>
                  <option value="">-- Pilih Status --</option>
                  <option value={["Kasus"]}>Positif</option>
                  <option value={["Sembuh"]}>Sembuh</option>
                  <option value={["Dirawat"]}>Dirawat</option>
                  <option value={["Meninggal"]}>Meninggal</option>
                </select>
              </div>
              {isStatusError ? (
                <Alert color="red">
                  <p>Data wajib diisi!</p>
                </Alert>
              ) : (
                ""
              )}
              <div className={styles.form__group}>
                <label className={styles.form__label} htmlFor="Title">
                  Jumlah
                </label>
                <input
                  className={styles.form__input}
                  type="number"
                  name="jumlah"
                  id="jumlah"
                  placeholder="masukan jumlah"
                  value={jumlah}
                  onChange={handleJumlah}
                />
                {isJumlahError ? (
                  <Alert color="red">
                    <p>Data wajib diisi!</p>
                  </Alert>
                ) : (
                  ""
                )}
                {/* {isTitleError ? (
                  <Alert>
                    <p style={{ color: "red", textAlign: "start" }}>
                      Title wajib diisi!
                    </p>
                  </Alert>
                ) : (
                  ""
                )} */}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className={styles.form__button}
              type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormCovid;
