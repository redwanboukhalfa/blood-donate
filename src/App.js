import Header from "./components/Header/Header";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Bloodtypes from "./components/blood-types/Bloodtypes";
import Volunteer from "./components/Volunteer/Volunteer";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Bloodtypes />
      <Volunteer />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
