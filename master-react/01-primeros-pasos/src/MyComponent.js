// Import React moduls/ dependencies
import React, {Fragment} from "react";


// Function
const MyComponent = () => {

    let name = "Kaladin";
    let web = "kaladindev.com";

    let user = {
        name: "Kaladin",
        lastName: "Stormblessed",
        web:"kaladindev.com",
    };
    return(
        <div className="my-component">
            <h2>Component created</h2>
            <p>This is my first component</p>
            <h3>User info:</h3>
            <ul>
                <li>Name: <strong>{user.name}</strong> </li>
                <li>Last Name: <strong>{user.lastName}</strong> </li>
                <li>Web: <strong>{user.web}</strong> </li>
            </ul>

            <ul>
                <li>
                    React
                </li>

                <li>
                    Angular
                </li>

                <li>
                    Vue
                </li>
            </ul>

        </div>
    );
};

//Export
export default MyComponent;