import Header from "./components/Layout/Header";


import Hero from "./components/Main/Hero";
import Discover from "./components/Main/Discover";
import Reviews from "./components/Main/Questions";
import Gallery from "./components/Main/Gallery";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Hero />
      <Discover />
      <Reviews />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
