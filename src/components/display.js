import React from "react";
import '../css/display.css'
import AddItem from "./addItem";

function Display(props){
    return(
        <div>
            {props.list.map((items) => (
                <div>
                    <div className="transaction-item">
                        <div>
                            <h1>{items.amount}</h1>
                        </div>
                        <div>
                            <h1>{items.item}</h1>
                        </div>
                        <div>
                            <h1>{items.transactionType}</h1>
                        </div>
                        
                    </div>
                    
                </div>
            ))}
            
        </div>
    )
}

export {Display};