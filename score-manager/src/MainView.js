import React,{useState} from "react";
import Score from "./components/Score";

const mainView = ({scoreData}) => {
    for(let i=0;i<scoreData.legth;i++)
    {
        console.log(scoreData[i]);
    }

    return (
        <div>
            <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
            <div>
                <Score />
            </div>
        </div>
    );
}

export default mainView;