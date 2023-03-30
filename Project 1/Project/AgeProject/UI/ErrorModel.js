import React from "react";

import './ErrorModel.css'

let ErrorModel =(props)=>{

let hideError=()=>{
props.error(null)
}
// if we recive empty error it wont load conditional error component 

return(
    <div className="backdrop" onClick={hideError}> 
    {/* // When we will click on this dive or backdrop error will be removed */}
<div className="modal">
    <header className="header">
        <h2>
{props.title}
        </h2>
    </header>
    <div className="content">
        <p>
{props.message}
        </p>
    </div>
    <footer className="actions">
        <button onClick={hideError}> Close </button>
    </footer>
</div>
</div>
)
}

export default ErrorModel