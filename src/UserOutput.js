import React from 'react';
import './UserInputOutput.css';


const UserOutput = (props) => {
    return(
        <div className={"UserOutput"}>
            <p>{props.children}</p>
            <p>{props.username}</p>
        </div>
    )
}

export default UserOutput;