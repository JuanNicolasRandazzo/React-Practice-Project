import React, { useState } from 'react';
import PropTypes from "prop-types";

export const ExcerciceComponent = ({year}) => {


    const [yearNow, setYearNow] = useState(year);

    const next = (e) => {

        setYearNow(yearNow + 1);

    }

    const back = (e) => {

        setYearNow(yearNow - 1);

    }

    const changeYear = (e) => {

        let data = parseInt(e.target.value); // Interpreta el string a Int. 
                                            // de esta manera sí entra al if. 
        if(Number.isInteger(data)){

            setYearNow(data);

        }else{
            setYearNow(year);
        }

    }


  return (
    <div>
        <h2>Exercice with Events and UseState</h2>

        <strong className='label label-green'>
            {yearNow}
        </strong>

        <p>

            <button onClick={back}>Go back</button>
            &nbsp;
            <button onClick={next}>Go next</button>
            
        </p>

        <p>
            Change year:
            &nbsp;
                <input 
                onChange={changeYear}
                type='text' 
                placeholder='Change year'/>
        </p>
    </div>
  )
}

ExcerciceComponent.propTypes ={
    year: PropTypes.number.isRequired,
}