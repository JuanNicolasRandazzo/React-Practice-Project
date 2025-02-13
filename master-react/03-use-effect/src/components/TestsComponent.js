import React, { useEffect, useState } from 'react'
import { NotifyComponent } from './NotifyComponent';

export const TestsComponent = () => {


    const [user, setUser] = useState('Kaladin Stormblessed');
    const [date, setDate] = useState('01-01-1998');
    const [counter, setCounter] = useState(0);

    const changeName = (e) => {

        setUser(e.target.value);

    };

    const changeDate = (e) => {
        setDate(new Date().toLocaleDateString());
    }

    // It just executes itself once, when the component is charging the first time.
    useEffect(() => {
        console.log("You have charged the component: TestComponent");
    }, []);

    // It just if the user changes. 
    useEffect(() => {

        setCounter(counter + 1);

        console.log("You have charged the name: " + counter);
        
    }, [user]);

  return (
    <div>
        <h1>Efect - Hook useEffect</h1>
        <strong className={counter >= 10 ? 'label label-green' : 'label' }>{user}</strong>
        <strong className='label'>{date}</strong>
        &nbsp;

        <p>

            <input 
                    type='text' 
                    onChange={changeName} 
                    placeholder='Change Name'/>
            <button onClick={changeDate}>Change Date</button>
        

        </p>

        {user == "Shallan Davar" && <NotifyComponent/>}
        
    </div>
  );
}
