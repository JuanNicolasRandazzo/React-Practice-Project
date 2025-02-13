import { useFetch } from "../hooks/useFetch"



const url = "http://127.0.0.1:8000/auth/login/"

interface Data{
    username: string,
    password: string,
}

export const Login = () =>{

    const {data, error} = useFetch<Data>(url);

    if(error){
        return <div>There's an error: {error.message}</div>
    }

    return(
        <div>

            <form action="">
                <h1>Login</h1>
                <div>
                    <input type="text" placeholder="username" required/>
                </div>

                <div>
                    <input type="password" placeholder="password" required/>
                </div>
                
                <div>
                    <label><input type="checkbox"/> Remember me </label>
                    <a href="#">Forgot password</a>
                </div>

                <button type="submit">Login</button>

                <div>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>



        </div>
    )
}

