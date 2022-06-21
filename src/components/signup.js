
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase'
function Signup(){
    
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState("");
    let history = useHistory();

    const Register = ()=>{

        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home");
        }).catch((error)=>{
            console.log(error)
        })
        
    }
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <input type="email" placeholder="Enter your mail" onChange={(e) => setEmail(e.target.value)}/>{" "}<br></br>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={Register}>Sign up</button>
            <span>Already have an account</span>
            <span>
                <Link to='/'>login here</Link>
            </span>
        </div>
    )
}

export  default Signup

