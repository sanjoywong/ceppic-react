import React,{ useState, useEffect } from "react";
//import axios from "axios";
//import Contacts from "../data/dbContact.json"
//console.log(Contacts);
export default function ListeMessage() {
    const [data, getData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
   const fetchData=()=>{
    fetch('http://localhost:4000/contacts')
    .then((res)=>res.json())
    .then((response)=>{console.log(response);
    getData(response);})
   }
   return (
    <>
        <h1>Display JSON data to table in React JS</h1>
        <tbody>
            <tr>
                <th>nom</th>
                <th>email</th>
                <th>message</th>
                <th>id</th>
            </tr>
            {data.map((item, i) => (
                <tr key={i}>
                    <td>{item.nom}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                    <td>{item.id}</td>
                </tr>
            ))}
        </tbody>

    </>
);
    
};
