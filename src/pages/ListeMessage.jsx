import message from "../data/dbContact.json";

export default function ListeMessage() {
    return(
        <>
        <div>
        <h1>Liste des messages</h1>
        {message.contacts.map((message)=>(
            <li key={message.id}>
                <div>{message.nom}</div>
                <div>{message.email}</div>
            </li>
        ))}
        </div>
        </>
    );
};
