export default function UserCard({data}){
return(
    <div className="aff">
      <User
        UserId={data.userId}
        nom={data.nom}
        prenom={data.prenom}
        telephone={data.telephone} 
        email={data.email}
        profession={data.profession}
        />
      </div>
  );
}

const User = ({ UserId, nom, prenom, telephone,email,profession }) => {
    if (!UserId) return <div />;
    return (
      <div>
          <h5>{UserId}</h5>         
              <h5>{nom}</h5>
              <h4>{prenom}</h4>
              <p>{telephone}</p>
              <h5>{email}</h5>
              <h5>{profession}</h5>
            
      </div>
    );
  };

