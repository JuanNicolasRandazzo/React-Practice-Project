import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T>{
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading ] = useState<boolean>(true)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        let controller = new AbortController(); // Este controller nos ayuda a destruir la petición al endpoint cuando ya no lo 
                                                // estemos utilizando. 

        setLoading(true);

        const fetchData = async () => {  //Es un metodo async ya que al ser una llamada a un endpoint, tarda, no es instantaneo
                                        // Hay que esperar que suceda algo.
            try{
                const response = await fetch(url, controller);
                if(!response.ok){
                    throw new Error("Error in the petition")
                }

                const JsonData: T = await response.json();
                setData(JsonData)
                setError(null);
            }catch(err){
                setError(err as Error)
            }finally{
                setLoading(false)
            }

        }
        fetchData();

        return () => {
            controller.abort();
        }
    }, [url])

    return { data, loading, error }
}




// Cuando obtenemos una data tenemos que comunicarnos con un endpoint(entidad externa al componente).
  // Operaciones async
  // parametros de entrada
  // Un useEffect se utiliza para sync con entidades externas---
   //Se va a ejecutar:
    // 1. Cuando se monta el componente
    // 2. Cada vez que se modifique uno de los valores del state (los que estén dentro del arreglo de dependencias [])
    // Un useEffect es un metodo que acepta otro metodo y un arreglo de dependencias.