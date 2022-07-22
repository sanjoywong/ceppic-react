import React from "react";
import "./App.css";
import { userList } from "./data/data";
import UserCardre from "./components/UserCard"

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
      <div className="user-container">{userList.map((data)=>(
        <UserCardre key={data.userId} data={data} />
      ))}</div>
    </>
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