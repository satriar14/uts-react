import Provinsi from "../components/Provinsi/Provinsi";
import FormCovid from "../components/FormCovid/FormCovid";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

function Main() {
  return (
    <>
      <Provinsi />
      <FormCovid />
    </>
  );
}

function PageProvinsi() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default PageProvinsi;
