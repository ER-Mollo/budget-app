import AddItem from "./addItem";
import {Display} from "./display";

function Home(props){
    return(
        <div className="container">
            <Display list={props.list}/>
            <AddItem add = {props.add}/>
        </div>
    )
}

export default Home;