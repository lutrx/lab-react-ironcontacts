import './App.css';
import contactsJSON from "./contacts.json";
import { useState } from "react";



function App() {
  const [contacts, setContacts] = useState(contactsJSON.filter((contact, index) => {
    if (index < 5) {
      return contact;
    }
  }));

  return (
    <div className="App">
      <h2>IronContacts</h2>
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
