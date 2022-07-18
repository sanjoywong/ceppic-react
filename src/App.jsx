import logo from './logo.svg';
import './App.css';

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


//rendu

  return (
    <div className="App">
      {message}
      {message2}
      {calcul}
      {loggedIn && <p>Vous etes connecté</p>}
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
    
    </div>
  );
}

export default App;
