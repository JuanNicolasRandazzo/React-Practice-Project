import './App.css'
import { useFetch } from './hooks';


// * Siempre que algo tenga use al principio es un HOOK


const url = "https://api.example.com/data";

interface Data{
  name: string,
  lastName: string,
  age: number,
}

function App() {
  
   const {data,error,loading} = useFetch<Data>(url) //custom hook
  
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>There's an error: {error.message}</div>
  }

  return(
    <div>{JSON.stringify(data)}</div>
  )

}

export default App



/* Notas:

  1. Un componente siempre tiene que ser la mínima únicad de lógica
     posible.

  La doble llave {{}} significa que le voy a entrega lógica al html 
  que contieen un objeto. 

*/