import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from './component/Header/header';
import Slider from "./component/Slider/Slider";
import ListCard from "./component/Products/ListCard";
import About from "./component/About/About";
import Navbar from "./component/Navbar/navbar";
import Add from "./component/Add/add";
import Other from "./component/Other/other";
import Footer from "./component/footer/footer";

function App() {
  return (
    <>
        <Header/>
        <Navbar/>
        <Slider/>
        <About/>
        <ListCard/>
        <Add/>
        <Other/>
        <Footer/>
    </>
  );
}

export default App;
