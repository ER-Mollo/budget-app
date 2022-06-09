import React from "react";
import AddItem from "./addItem";

function Display(props){
    return(
        <div>
            {props.list.map((item) => (
                <div>
                    <h1>{AddItem.amount}</h1>
                    <h1>{AddItem.item}</h1>
                    <h1>{AddItem.transactionType}</h1>
                </div>
            ))}
            
        </div>
    )
}

export {Display};