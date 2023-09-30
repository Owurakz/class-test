import "./App.css";
import Navbar from "./components/navbar";
import logo from "./components/images/work.png";
import Banner from "./components/banner";
import Cardsmain from "./components/cardsmain";
import passport from "./components/images/Owuraku.jpg";
import Footer from "./components/footer";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner img={logo} />
      <Cardsmain
        img={passport}
        about="My name is Owuraku Emmanuel Sintim and I am an up and coming software developer with Codetrain Africa, my dream is to serve underprivileged communities with access to electricity and financial services."
        contact="Number : +233 540643268
        Number : +233 269679486
        email : owurakusintim@gmail.com"
      />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
