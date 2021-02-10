import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [stateCelbs, setStateCelbs] = useState(contacts.splice(0, 5));
  const [otherCelbs, setOtherCelbs] = useState(contacts);
  const showFive = () => {
    return stateCelbs.map((eachContact, i) => {
      return (
        <tr>
          <td>
            <img src={eachContact.pictureUrl} alt=" "/>
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <td>
            <button value={eachContact.id} onClick={e => removeLoser(e.target.value)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  const removeLoser = (e) => {
    stateCelbs.forEach((contact, i) => {
      let tempCelbs = [...stateCelbs]
      if (contact.id === e) {
        otherCelbs.push(tempCelbs[i])
        tempCelbs.splice(i,1)
        setStateCelbs(tempCelbs);
      }
    })
  }

  const addRandom = () => {
    if (otherCelbs.length > 0) {
    let randomN = Math.floor(Math.random() * otherCelbs.length);
    let tempCelbs = [...stateCelbs]
    let tempAllCelbs = [...otherCelbs]
    tempCelbs.push(tempAllCelbs[randomN])
    tempAllCelbs.splice(randomN, 1)
    setStateCelbs(tempCelbs)
    setOtherCelbs(tempAllCelbs)
    } 

    console.log(otherCelbs.length)

    // let randomCeleb = otherCelbs.splice(randomN, 1)[0];
    // let newCelebs = [...stateCelbs];
    // newCelebs.push({ ...randomCeleb });
    // setStateCelbs(newCelebs);
  };

  const sortName = () => {
    console.log(stateCelbs)
    setStateCelbs([...stateCelbs].sort((a, b) => (a.name > b.name) ? 1 : -1));
    console.log(stateCelbs)
  };

  const sortPopularity = () => {
    setStateCelbs([...stateCelbs].sort((a, b) => (a.popularity < b.popularity) ? 1 : -1));
  }

  return (
    <div id="mainDiv">
      <h1>Iron Contacts</h1>
      <button onClick={addRandom}>Add Random Actor</button>
      <button onClick={sortName}>Sort by Name</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>
              <h1>Picture</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Popularity</h1>
            </th>
            <th>
              <h1>Action</h1>
            </th>
          </tr>
        </thead>

        <tbody>{showFive()}</tbody>
      </table>{' '}
    </div>
  );
}

export default App;
