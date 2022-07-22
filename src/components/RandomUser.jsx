import { useState, useEffect } from "react";
import "./RandomUser.css";

export default function RandomUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((Response) => Response.json())
      .then((data) => setUsers(data.results));
  }, []);

  //console.log(users);

  return (
    <div className="randomusers">
        {users.map((user) => (
          <figure key={user.id.value}>
            <img src={user.picture.large} alt={user.name.first} />
            <figcaption>
              <div>
                {user.name.first}
                {user.name.last}
              </div>
              <div>{user.email}</div>
            </figcaption>
          </figure>
        ))} 
    </div>
  );
}
