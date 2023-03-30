import React from "react";

import './UI/Form.css'

let DisplayData = (props)=>{
    console.log(props.data,'all data')
    props.data.map((data)=>{
        console.log(data,'mapped data')
    })
return(
<div className="display-section">
    {props.data.map((data)=>(
<div className="items" key={data.id}>
        <h1>{data.Uname} ({data.Uage} years old)</h1>
</div>
    ))}
</div>
)
}

export default DisplayData