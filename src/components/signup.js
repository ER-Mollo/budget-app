

import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Signup(){
    const btn = {
        width: '150px'
    }
    let history = useHistory();

    // const login = (()=>{
    //     history.push("/home");
    // })
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <input type="email" placeholder="Enter your mail"/><br></br>
            <input type="password" placeholder="Enter your password"/>
            <button style={btn}>Sign up</button>
            <span>Already have an account</span>
            <span>
                <Link to='/'>login here</Link>
            </span>
        </div>
    )
}

export  default Signup

