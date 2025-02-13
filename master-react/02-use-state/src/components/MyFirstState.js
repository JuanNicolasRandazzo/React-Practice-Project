import React, { useState } from 'react'

export const MyFirstState = () => {

  /*
  Problematica:

  let name = "Kaladin Stormblessed"

  const changeName = (e) => {

      name ="Shallan Davar";

  }
  */

  const [name, setName] = useState("Kaladin Stormblessed");

  const changeName = (e, defaultName) =>{

    setName(defaultName);

  }
  return (
    <div>
      <h3>Component: MyFirstState</h3>
      <strong className='label'>
        {name}
      </strong>
      &nbsp;
      <button onClick={ e => {changeName(e,"Shallan Davar")}}>Change name for "Shallan"</button>
      &nbsp;
      <input type='text' onKeyUp={e => changeName(e, e.target.value) } placeholder='change name'/>
    
    
    
    </div>
  )
}
