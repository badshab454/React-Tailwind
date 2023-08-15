import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Analytics from "./components/Analytics";
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
