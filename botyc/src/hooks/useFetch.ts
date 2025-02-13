import { useEffect,useState } from "react";



type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T>{
    data: Data<T>
    error: ErrorType;
}



export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
      let controller = new AbortController();

      const fetchData = async() => {

        try{
            const response = await fetch(url,controller);
            if(!response.ok){
                throw new Error("Error in the request")
            }

            const JsonData: T = await response.json();
            setData(JsonData)
            setError(null);
        }catch(err){
            setError(err as Error)
        }

      }
      fetchData()
    
      return () => {
        controller.abort();
      }
    }, [url])

    return {data, error}
    
}
