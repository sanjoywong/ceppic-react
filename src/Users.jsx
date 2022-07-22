import React from "react";
import "./App.css";
import { userList } from "./components/data/data";

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>User Liste</h2>
    </header>
  );
};

export const Users = () => {
  return (
    <>
      <HomePageHeader />
      <div className="user-container">{userList.map((data,key)=>{
        return(
          <div key={key} >
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
      })}</div>
    </>
  );
};

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

const User1 = ({ UserId, nom, prenom, telephone,email,profession }) => {
  if (!UserId) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{UserId}</h5>
          </td>
          <td>
            <h5>{nom}</h5>
          </td>
          <td>
            <h4>{prenom}</h4>
          </td>
          <td>
            <p>{telephone}</p>
          </td>
          <td>
            <h5>{email}</h5>
          </td>
          <td>
            <h5>{profession}</h5>
          </td>
        </tr>
      </tbody>
    </table>
  );
};