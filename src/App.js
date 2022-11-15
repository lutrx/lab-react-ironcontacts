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

  const sortByName = () => {
    const sortedContactsName = Array.from(contacts).sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContactsName);
  }

  const sortByPopularity = () => {
    const sortedContactsPopularity = Array.from(contacts).sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContactsPopularity);
  }

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={() => addRandomContact()} className="btn-add">Add Random Contact</button>
      <button onClick={sortByPopularity} className="btn-sort-pop">Sort by popularity</button>
      <button onClick={sortByName} className="btn-sort-name">Sort by name</button>
      <table className='table'>
        <thead className='table-head'>
          <tr className='table-row-head'>
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
            <th>
              <h3>Actions</h3>
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
              <td>
                <button onClick={() => deleteContact(contact.id)} className="btn-delete">Delete</button>
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
