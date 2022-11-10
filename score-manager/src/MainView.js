import React,{useState} from "react";
import Score from "./components/Score";

const mainView = (props) => {
    // const [view,setView]=useState('');

    return (
        <div view={props.view}>
            <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
            <div>
                <Score />
            </div>
        </div>
    );
}

export default mainView;