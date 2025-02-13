import React from 'react';
import PropTypes from 'prop-types';
export const ThirdComponent = ({name, lastName, ficha}) => {

    


  return (
    <div>
        <h1>Communication between components</h1>
        <ul>
            <li>{name}</li>

            <li>{lastName}</li>

            <li>{ficha.grupo}</li>

            <li>{ficha.estado}</li>

            <li>{ficha.altura}</li>
        </ul>
    </div>
  )
}

ThirdComponent.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    ficha: PropTypes.object,
}

ThirdComponent.defaultProps = {
    name: "Shallan",
    lastName: "Davar",
}