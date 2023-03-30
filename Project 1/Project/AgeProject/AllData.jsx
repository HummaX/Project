import React,{useState,Fragment} from "react";

import Form from "./Form/Form";
import DisplayData from "./DisplayData";


let AllData = ()=>{

    let data=[{Uname:'hummas',Uage:10,id:10},{Uname:'hummas',Uage:10,id:11},]

let [oldData,updatedData] = useState(data)


let dataRecived =(fetchedData)=>{
    updatedData((prevdata)=>{
        return [...prevdata,fetchedData]
    })
}

console.log(data)
    return(
        <Fragment>
        <div>
       <Form data={dataRecived}/>
       </div>
       <DisplayData data={oldData}/>
       </Fragment>
       
    )
}

export default AllData