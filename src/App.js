import './App.css';
import contactsJSON from "./contacts.json";
import { useState } from "react";



function App() {
  const firstFive = contactsJSON.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);
  

  const addRandomContact = () => {
    setContacts((prevContacts) => {
      const newArray = contactsJSON.filter((contact) => {
        return !prevContacts.includes(contact)
      })
    
      const randomContact = newArray[Math.floor(Math.random() * newArray.length)];
      const contactsWithRandom = [...prevContacts, randomContact];
      return contactsWithRandom;
    })
  }

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={() => addRandomContact()} className="btn-add">Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>
              <h3>Picture</h3>
            </th>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Popularity</h3>
            </th>
            <th>
              <h3>Won Oscar</h3>
            </th>
            <th>
              <h3>Won Emmy</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="celeb"/>
              </td>
              <td>
                <p>{contact.name}</p>
              </td>
              <td>
                <p>{contact.popularity}</p>
              </td>
              <td>
                {contact.wonOscar ? '🏆' : ''}
              </td>
              <td>
                {contact.wonEmmy ? '🏆' : ''}
              </td>
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
