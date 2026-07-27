import { createSlice } from "@reduxjs/toolkit";

        const initialState = {
          value:JSON.parse(localStorage.getItem("tasks"))||[],
          editTaskId:null
        }


  const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addNewTodo:(state,action)=>{
            state.value.push(action.payload)
            localStorage.setItem("tasks",JSON.stringify(state.value))
            state.editTaskId=null
            console.log(state.value,action.payload)
            
        },
        DeleteTodo:(state,action)=>{
         state.value=state.value.filter((elem)=> action.payload != elem.id)
         localStorage.setItem("tasks",JSON.stringify(state.value))

        },
        EditTodo:(state,action)=>{
            let {id,task,Priority,Complete}=action.payload
           let FindTask=state.value.find((elem)=>{
            if(id ===elem.id){
                elem.Priority=Priority
                elem.id=id
                elem.task=task
                elem.Complete=Complete
                
           }
        })
         state.editTaskId =null;
        localStorage.setItem("tasks",JSON.stringify(state.value))

        },
        addEditTask:(state,action)=>{
           state.editTaskId = action.payload;
        },
        TaskCompleted:(state,action)=>{
             state.value.find((elem)=> {
                if(action.payload == elem.id){
                 elem.Complete=!elem.Complete
             }})
             localStorage.setItem("tasks",JSON.stringify(state.value))
        }
    }
})

 export const {addNewTodo,DeleteTodo,addEditTask,EditTodo,TaskCompleted}=todoSlice.actions
export default todoSlice.reducer