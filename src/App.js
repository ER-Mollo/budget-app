import logo from './logo.svg';
import './App.css';
// import Display from '../components/display.js'
import React, {useState, useEffect} from 'react'
// import AddItem from './components/addItem';
// import { Display } from './components/display';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

import {collection, getDocs} from 'firebase/firestore';


function App() {

  const[transaction, setTransaction] = useState ([]);

  useEffect(()=>{
    
  })

  const addTransaction = ((amount, item, transactionType) => {

    setTransaction((items) => [...items, {
      amount: amount,
      item: item,
      transactionType: transactionType
    }])
  })

  return (
    
    <Router>
      <Switch>
        <Route exact path = "/" component={Login}/>
        <Route path = "/sign-up" component={Signup}/> 
        <Route path = "/home"><Home list={transaction} add = {addTransaction}/></Route>
        
      </Switch>
      
    </Router>
    
    
  );
}

export default App;
