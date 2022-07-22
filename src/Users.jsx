import React from "react";
import "./App.css";
import { userList } from "./data";

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
          <div key={key}>
            <User
              UserId={data.userId}
              nom={data.nom}
              prenom={data.prenom}
              telephone={data.telephone} />
            </div>
        );
      })}</div>
    </>
  );
};

const User = ({ UserId, nom, prenom, telephone }) => {
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
        </tr>
      </tbody>
    </table>
  );
};