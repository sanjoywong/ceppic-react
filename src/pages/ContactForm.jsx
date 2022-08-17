import axios from "axios";
import { useState } from "react";
export default function ContactForm() {
  const [ nom, setNom ] = useState();
  const [ email, setEmail ] = useState();
  const [ message, setMessage ] = useState();
  const [submitted, setSubmitted] = useState(false);

  //console.log(message);
  const handleSubmit = (event)=>{
    event.preventDefault();
    const contacts={nom,email,message};
    //console.log(contacts);

    axios
     .post("http://localhost:4000/contacts" , contacts)
     .then((response)=>{console.log("axios response=>",response);
      setSubmitted(true);
    })
    .catch((error)=>{
      console.log("axios error =>",error);
    })

  };

  if (submitted) {
    return(
        <>
        <p>Merci pour votre message!</p>
        </>
    );
  }

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nom"
            placeholder="votre nom"
            required
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="input your message"
            name="message"
            required
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Envoyer le message</button>
        </div>
      </form>
    </div>
  );
}
