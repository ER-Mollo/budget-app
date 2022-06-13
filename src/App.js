import logo from './logo.svg';
import './App.css';
// import Display from '../components/display.js'
import React, {useState} from 'react'
import AddItem from './components/addItem';
import { Display } from './components/display';



function App() {

  const[transaction, setTransaction] = useState ([]);

  const addTransaction = ((amount, item, transactionType) => {

    setTransaction((items) => [...items, {
      amount: amount,
      item: item,
      transactionType: transactionType
    }])
  })

  return (
    <div className="container">
        <Display list={transaction}/>
        <AddItem add = {addTransaction}/>
    </div>
  );
}

export default App;
