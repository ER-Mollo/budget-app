import React from "react";
import '../css/display.css'
import AddItem from "./addItem";

function Display(props){
    return(
        <div>

            <h1 style={{paddingTop:"5px"}}>transaction history</h1>
            {props.list.map((items) => (
                <div style={{marginTop:"5%"}}>
                    {items.transactionType == "Expense" ? (
                    <div className="transaction-item" style={{borderRight: "4px solid red"}}>
                        <div>
                            <h4 style={{paddingLeft:"12px", paddingTop:"25px"}}>{items.item}
                        
                            </h4>
                        </div>
                        <div>
                            <h4 style={{ paddingLeft:"290px", paddingTop:"25px"}}>{items.amount}</h4>
                        </div> 
                        
                    </div>
                    )  : (
                        <div className="transaction-item" style={{borderRight: "4px solid green"}}>
                        <div>
                            <h4 style={{paddingLeft:"12px", paddingTop:"25px"}}>{items.amount}</h4>
                        </div>
                        <div>
                            <h4 style={{ paddingLeft:"290px", paddingTop:"25px"}}>{items.item}</h4>
                        </div> 
                        
                    </div>
                    )
                    }

                </div>
            ))}
            
        </div>
    )
}

export {Display};