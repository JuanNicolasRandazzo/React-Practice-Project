import React, { use, useState } from 'react'

export const FormComponent = () => {


  const [user, setUser] = useState([]);

  const getFormData = (e) => {
    e.preventDefault();

    let formData = e.target;
    let user = {
      name: formData.name.value,
      lastName: formData.lastName.value,
      gender: formData.gender.value,
      bio: formData.bio.value,
      send: formData.send.value,
    };

    console.log(user);

    setUser(user);

  }

  const changeData = (e) => {

    let inputName = e.target.name;
    let modifiedUser = user;

    // modifiedUser[inputName] = e.target.value;

    setUser(previousState => {

      return{
        ...previousState,
        [inputName]: e.target.value
      }

    });

    

  }

  return (
    <div>
         <h1>Forms with React</h1>

          {user.send && 
            (
              <div className='info_user label label-gray'>
                {user.name} {user.lastName} is a {user.gender} and his/her/their biography is: <p>{user.bio}</p>
              </div>
            )
          }
         


         <form onSubmit={getFormData}>
            <input type='text' 
                    placeholder='Name'
                    name='name'
                    onChange={changeData}
            />
            <input type='text' 
                    placeholder='Last Name'
                    name='lastName'
                    onChange={changeData}
            />
            <select name='gender' onChange={changeData}>
                <option value='man'>Man</option>
                <option value='woman'>Woman</option>
                <option value='N/A'>Prefer not to answer</option>
            </select>
            <textarea placeholder='Biography' 
                      name='bio'
                      onChange={changeData}>
            </textarea>

            <input type='submit' value='Send' name='send'/>
         </form>
    </div>
  )
}
