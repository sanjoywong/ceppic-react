import { useState } from "react";
export default function BoutonIncreament({texte,nb}){
    const [count, setCount] = useState(nb);

function handleIncreamente() {
   setCount(count+1);
}


return(
    <div>
    <p> {texte} {count}.</p>
    <button onClick={handleIncreamente}>Incrementer {count}</button>
    <br />
</div>);

}