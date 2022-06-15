import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Login(){
    const btn = {
        width: '150px'
    }
    let history = useHistory();

    const login = (()=>{
        history.push("/home");
    })
    return (
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder="Enter your mail"/><br></br>
            <input type="password" placeholder="Enter your password"/>
            <button style={btn} onClick={login}>Login</button>
            <span>Don't have an account</span>
            <span>
                <Link to='/sign-up'>Create account here</Link>
            </span>
        </div>
    )
}

export  default Login