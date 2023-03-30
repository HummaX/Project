import React,{useState} from "react"

import Form from "./Form/Form"
import AllGoals from "./AllGoals"

import './style.css'

let HomePage =()=>{

let data = [
    {goal:'name',id:13},
    {goal:'Hummas',id:10},
]

let [oldGoals,updateGoals] = useState(data)


// Fetching data From Goal
let dataById=(id)=>{
   updateGoals((prevGoals)=>{
    let updatedGoals = prevGoals.filter((data)=>{return data.id !== id})// will only return those values whihc are not equal to given value
    return updatedGoals
   })
}


let goalFetcher=(goal)=>{
    updateGoals((prevGoals)=>{
        return [goal,...prevGoals]
    })
}


if(oldGoals.length === 0){
    return(
        <div>
                    <div className="body">
            <div>
            <Form goalFetcher={goalFetcher}/>
                <h1 style={{color:'white',textAlign:'center'}}> Add Some Goals </h1>
            </div>
        </div>
        </div>
    )
}

    return(
        <div className="body">
            <div>
                <Form goalFetcher={goalFetcher}/>
<AllGoals items={oldGoals} dataById={dataById}/>
            </div>
        </div>
    )
}

export default HomePage