import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout() {
   return(
    <div className="App">
    <Nav />
    <Header
        title="React JS"
        texte="librairie javascript fonde par Facebook"
      />
    <Footer />
    </div>
   );    
};
