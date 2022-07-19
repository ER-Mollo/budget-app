import '../css/login.css'
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
        <div className='main'>
        <div className='top'>

        </div >
        <div className='bottom'>
            <div className="container">
                <div className='inputs'>
                    <h1>Welcome Please Register</h1>

                    <input type="email" placeholder="Enter your mail" onChange={(e) => setEmail(e.target.value)}/><br></br>
                    <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            
                <button  onClick={Register}>Register</button><br></br>
                <span>Already have an account?</span>
                <span>
                    <Link to='/'>Login here</Link>
                </span>
            
            </div>
        </div>
    </div>
    )
}

export  default Signup

