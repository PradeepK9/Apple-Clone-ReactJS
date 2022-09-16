import './App.css';
import Navbar from './components/Navbar'
import BannerContainer from './components/BannerContainer';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

function App() {
  console.log("App rendred.....");
  return (
    <>
      <Navbar />
      <BannerContainer />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
