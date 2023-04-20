import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Global from "../components/Global/Global";
import DataTable from "../components/TableGlobal/TableGlobal";
import FormCovid from "../components/FormCovid/FormCovid";
import Provinsi from "../components/Provinsi/Provinsi";
import { useEffect, useState } from "react";
import data from "../utils/constants/provinces";
import TableProvinsi from "../components/TableProvinsi/TableProvinsi";

function Main() {
  const [province, setProvince] = useState(data.provinces);

  function handleSubmit({ status, jumlah, provinsi }) {
    const kasus = status.toLowerCase();
    const newProvince = {
      kota: provinsi,
      [kasus]: jumlah,
    };

    const nProp = province.map((p) => {
      if (p.kota === provinsi) {
        p = { ...p, ...newProvince };
      }
      return p;
    });

    setProvince(nProp);
  }

  useEffect(() => {
    console.log("change prov", province);
  }, [province]);

  return (
    <>
      <Global />
      <Provinsi data={province} />
      <FormCovid data={province} onSubmit={(res) => handleSubmit(res)} />
    </>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
