import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import '../css/login.css';


function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const btn = {
        width: '150px'
    }
    let history = useHistory();

    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home");
        }).catch((err)=>{
            console.log(err);
        })
        
    })
    return (
        <div className='main'>
            <div className='top'>

            </div >
            <div className='bottom'>
                <div className="container">
                    <div className='inputs'>
                        <h1>Welcome Back</h1>

                        <input type="email" placeholder="Enter your mail" onChange={(e) => setEmail(e.target.value)}/><br></br>
                        <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                
                    <button style={btn} onClick={login}>Login</button><br></br>
                    <span>Don't have an account?</span>
                    <span>
                        <Link to='/sign-up'>Create account here</Link>
                    </span>
                
                </div>
            </div>
        </div>
    )
}

export  default Login