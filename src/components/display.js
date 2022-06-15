import React from "react";
import '../css/display.css'
import AddItem from "./addItem";

function Display(props){
    return(
        <div>
            {props.list.map((items) => (
                <div>
                     
                    {items.transactionType == "Expense" ? (
                    <div className="transaction-item">
                        <div>
                            <h4 style={{paddingLeft:"12px", paddingTop:"25px"}}>{items.amount}</h4>
                        </div>
                        <div>
                            <h4 style={{ paddingLeft:"290px", paddingTop:"25px"}}>{items.item}</h4>
                        </div> 
                        <div className="expense-line"> </div>
                    </div>
                    )  : (
                        <div className="transaction-item">
                        <div>
                            <h4 style={{paddingLeft:"12px", paddingTop:"25px"}}>{items.amount}</h4>
                        </div>
                        <div>
                            <h4 style={{ paddingLeft:"290px", paddingTop:"25px"}}>{items.item}</h4>
                        </div> 
                        <div className="income-line"> </div>
                    </div>
                    )
                    }

                </div>
            ))}
            
        </div>
    )
}

export {Display};