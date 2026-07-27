import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, EditTodo } from "../features/todoslice";
import { v4 as uuidv4 } from 'uuid';
import { useRef } from "react";

function TodoForm() {
       const initialValue=useSelector((state)=>state.todo.value)
       const initialEditValue=useSelector((state)=>state.todo.editTaskId)

      let dispatch=useDispatch()
      const priorityRef = useRef();
      const inputRef=useRef(null)

    function handelSubmit(e){
     e.preventDefault()
     let obj
     if(!initialEditValue){
       obj={
        task:inputRef.current.value,
        Priority:priorityRef.current.value,
        Complete:false,
        id:uuidv4()
        
        }
         dispatch(addNewTodo(obj))
         console.log("new task inter")
     }else{
       obj={
        task:inputRef.current.value,
        Priority:initialEditValue.Priority,
        Complete:initialEditValue.Complete,
        id:initialEditValue.id
       }
        dispatch(EditTodo(obj))
         console.log("old task inter")

     }
    
    //  console.log(priorityRef.current.value)
    
    //  console.log(initialValue)
    e.target[0].value=""
    }
      initialEditValue?inputRef.current.value=initialEditValue.task:null
    
    //272e9ac5-59e1-4c60-b286-80bdfa1c9019
  return (
    <form onSubmit={(e)=>handelSubmit(e)} className="space-y-4 mb-8">
     
      <input
      ref={inputRef}
       defaultValue={initialEditValue?.task}
       required
        type="text"
        placeholder="Enter your task..."
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all"
      />

      {/* Priority + Button */}
      <div className="flex gap-3">

        <select  ref={priorityRef}
          className="
                w-44
                border
                border-slate-300
                rounded-xl
                px-4
                py-3
                bg-white
                outline-none
                focus:ring-2
                focus:ring-blue-500
                cursor-pointer
                transition-all"
        >
          <option value={"🟢 Low"}>Select Priority</option>
          <option value={"🟢 Low"}>🟢 Low</option>
          <option value={"🟡 Medium"}>🟡 Medium</option>
          <option value={"🔴 High"}>🔴 High</option>
        </select>

        <button
          className="
          flex-1
          bg-blue-600
          hover:bg-blue-700
          text-white
          rounded-xl
          flex
          justify-center
          items-center
          gap-2
          hover:scale-[1.02]
          active:scale-95
          transition-all
          duration-300
          cursor-pointer
          shadow-md"
        >
          <FaPlus />
          Add Task
        </button>

      </div>
    </form>
  );
}

export default TodoForm;