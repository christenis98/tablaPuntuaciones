import './Card.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
    const [view, setView]=useState(props.view)
    return (
        <button onClick={()=>{setView()}} className="div1"> 
        <h1>Team</h1>
        </button>
    );
};

export default Card;