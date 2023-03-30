import React from "react";

import './style.css'

let Goal = (props)=>{

let deleteById = ()=>{
    props.dataById(props.id)
}

    return(
<div onClick={deleteById} className='input'>
    <div key={props.id}>

        {props.children}
    </div>
    
</div>
    )
}

export default Goal