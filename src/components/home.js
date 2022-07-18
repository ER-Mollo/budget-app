import React, {useState, useEffect} from "react";
import AddItem from "./addItem";
import {Display} from "./display";
import {BudgetBalance} from './balance';
import '../css/login.css';

function Home(props){

    const [expense, setExpense] = useState(0);
    const[income , setIncome] = useState(0);

    useEffect(()=>{

        let expense = 0;
        let income = 0;

        for(let i=0; i<props.list.length; i++){
            if(props.list[i].transactionType =="Expense"){
                expense = expense + parseInt(props.list[i].amount);
            }else{
                income = income + parseInt(props.list[i].amount);
            }
        }
        setIncome(income);
        setExpense(expense);

    })
    return(
        <div className="container">
            <BudgetBalance expense={expense} income={income}/>
            <Display list={props.list}/>
            <AddItem add = {props.add}/>
        </div>
    )
}

export default Home;