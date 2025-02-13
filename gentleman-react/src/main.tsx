import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*Pregunta de entrevista:

  Por qué en mi aplicación aparece algo que se llama <StrictMode></StrictMode>?

  Es un modo que controla la manera en que funcionan los componentes.
  Controla el funcionamiento correcto de los componentes. 
  En producción se quita.

  Cómo lo hace?

  Crea un componente, lo renderisa (lo monta), lo rompe, y lo vuelve 
  a cargar; y va a ver si el estado del componente que se acaba de 
  duplicar(de volver a hacer) es igual a antes de que se haya destruido.



  * Un componente es una función que va aser ejecutada y su resultado 
  se renderiza. Nuestro trabajo como desarolladores es tratar que ese 
  número de renders sea el mínimo posible.

  * Cunado tienes un archivo .tsx o jsx lo quee significa la x es que 
  el archivo está retornando un html con lógica. 



*/
