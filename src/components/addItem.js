
import React , {useState} from "react"
import "../css/add.css";

import {db} from '../config/firebase';

import {addDoc, collection} from 'firebase/firestore';
function AddItem(props){

    const [amount, setAmount] = useState('');
    const [item, setItem] = useState('');
    const [transactionType, settransactionType] = useState('');

    const add = (()=>{
       
        const collectionRef = collection(db,"transaction");

        const transaction = {
            item:item,
            amount:amount,
            transactionType: transactionType,
        };

        addDoc(collectionRef, transaction).then(()=>{
            alert("Added successfully")
        }).catch((err)=>{
            console.log(err);
        })
        props.add(amount, item, transactionType);
    })
    return (
       <div>
           <input placeholder="Enter Items" onChange={(e)=> setItem(e.target.value)}/><br></br>
           <input placeholder="Enter amount" onChange={(e)=> setAmount(e.target.value)}/><br></br>
           <select onChange={(e)=> settransactionType(e.target.value)}>
               <option value="Income">Income</option>
               <option value = "Expense">Expense</option>
           </select><br></br>
           <button id="btn" onClick={add}>Add Item</button>
       </div> 
    )
}
export default AddItem;
