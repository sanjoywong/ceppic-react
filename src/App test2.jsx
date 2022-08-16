
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import BoutonIncreament from './components/BoutonIncreament';
import StyleExample from './components/StyleExample';
import { Users } from './Users';
import RandomUser from './components/RandomUser';
import {Routes,Route,Link} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {


const message = <h1>Hello le monde</h1>
const message2 = (<div>
  <h3>Block html</h3>
  <p>Lorem ipsum dolor sit amet consectetur.</p>
</div>);

const calcul = <h2>Cette operation 2 * 6 vaut {2*6}</h2>;
const loggedIn = true;
const voitures = ["Ford","Audi","Honda"];
const voitures2 =[{"id":1,"nom":"Ford"},{"id":2,"nom":"Audi"},{"id":3,"nom":"Honda"}];
//comportement



  return (
    <div className="App">
       <nav>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</nav>

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <img src="/assets/img/logo512.png" alt="React test"  style={{
  width: '60px',
  height : '70px',
  border : 'solid 2px red'
}} />
      
    <BoutonIncreament texte="le nombre de fois est" nb={45}/>

      <Header title="Logo" texte="React JS fond par Facebook" />
      {message}
      {message2}
      <StyleExample />
      {calcul}
      {loggedIn && <p>Vous etes connecté</p>}
      {loggedIn ? <p>Vous etes connecté</p> : <p>Inscription</p>}
      {voitures}
      <ul>
        {voitures.map((voiture)=>(
          <li key={voiture}>{voiture}</li>
        ))}
      </ul>
      <br />
      <ul>
        {voitures2.map((voiture)=>(
          <li key={voiture.id}>{voiture.nom}</li>
        ))}
      </ul>
      <RandomUser />
     
      <Footer />
    </div>
  );
}

export default App;