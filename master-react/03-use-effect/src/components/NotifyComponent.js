import React, { useEffect } from 'react'

export const NotifyComponent = () => {


    useEffect(() => {
        // Cuando el componente se monta
        alert('The component NotifyComponent is built');
        // Cuando el componente se desmonta
        return () =>{
            alert('Component un-built');
        }
    }, [])


  return (

    <div>
        <hr/>
        <h3> Welcome Shallan</h3>
        <button onClick={e => {
            alert('Welcome Mss.Davar!!');
        }}>Show Alert</button>
    </div>
    
  )
}
