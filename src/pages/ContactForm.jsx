import { useState } from "react";
export default function Contact() {
  const { nom, setNom } = useState();
  const { email, setEmail } = useState();
  const { message, setMessage } = useState();
  const {submitted, setSubmitted} = useState();

  const handleSubmit = (event)=>{
    event.preventdefault();
    const contacts={nom,email,message};
    console.log(contacts);
    setSubmitted(true);
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
      <form action="POST" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nom"
            placeholder="votre nom"
            required
            onChange={(event) => setNom(event.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(event) => setEmail(event.target.value)}
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
