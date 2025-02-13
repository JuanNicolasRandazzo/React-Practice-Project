import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    // Generico / basico
    const getStaticUsers = () => {
        setUsers([
            {
                "id": 1,
                "email": "kaladin.stormblessed@reqres.in",
                "first_name": "Kaladin",
                "last_name": "Stormblessed",
            },
            {
                "id": 2,
                "email": "shallan.davar@reqres.in",
                "first_name": "Shallan",
                "last_name": "Davar",
            },
            {
                "id": 3,
                "email": "Syl.daughter@reqres.in",
                "first_name": "Sylphrena",
                "last_name": "Ancient",
            },
        ]);
    }

    const getUsersAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(answer => answer.json())
            .then(final_result => {
                setUsers(final_result.data);
                console.log(users);
            },
            error => {
                console.log(error);
            }
        );
    }

    const getUsersAjaxAW = () => {

        setTimeout( async() => {

            try{
                
                const request = await fetch("https://reqres.in/api/users?page=1");
                const {data} = await request.json();

                setUsers(data);
                setLoading(false);

            }catch(error){

                console.log(error);
                setErrors(error.message);
            }

            
            
        }, 2000)

        

    }

    useEffect(() => {

        //getStaticUsers();
        //getUsersAjaxPms();
        getUsersAjaxAW();

    }, []);

    if(errors){
        //When an error ocurs
        return(
            <div className='loading'>
                {errors}
            </div>
        );

    } else if(loading == true){

        // When everything is loading
        return(
            <div className='loading'>
                Loading data ...
            </div>
        );

    }else if(loading == false && errors === null){

        
        // When everything is okay

        return (
            <div>

                <h2>Users list with Ajax</h2>
                <ol className='users'>
                    {
                        users.map(user => {
                            console.log(user);
                            return <li key={user.id}>
                                        <img src={user.avatar} width="80"/>
                                        &nbsp;
                                        {user.first_name} {user.last_name}
                                    
                                    
                                    </li>
                        })
                    }
                </ol>


            </div>
        );
        
    }

}
