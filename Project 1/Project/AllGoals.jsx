import React from "react";

import Goal from "./Goal";

let AllGoals = (props)=>{
    console.log(props.data)
    
//     let clickHandler =(event)=>{
//         event.target.remove()
//     }

//   let deleteId = ()=>{
//     console.log(props.data.goal)
//   }  


let james = props.items.map((data)=>{
    return data
})
console.log(james,'all goals')


// let deleteData = props.data.map((data)=>{
//     return data.goal
// })

// deleteData()

    return(
     <div>
            {props.items.map((data)=>(
<Goal id={data.id} dataById={props.dataById}>
    {data.goal}
</Goal>

            ))}
     </div>   
    )
}

export default AllGoals