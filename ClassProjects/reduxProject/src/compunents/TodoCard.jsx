import { FaTrash, FaEdit, FaRegStickyNote } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addEditTask, DeleteTodo, TaskCompleted } from "../features/todoslice";
import { FaRegCircle,FaRegCheckCircle } from "react-icons/fa";


function TodoCard({item}) {
    const dispatch=useDispatch()
    function handelEdit(task){
        dispatch(addEditTask(task))
    }
  return (
    <div 
      className="
      bg-white
      border
      border-slate-200
      rounded-xl
      p-5
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      flex
      items-center
      justify-between"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <div onClick={()=>dispatch(TaskCompleted(item.id))} className="bg-blue-100 text-blue-600 p-3 rounded-xl">
         {item.Complete ? <FaRegCheckCircle size={18}/> :<FaRegCircle size={18} />}
        </div>

        <div>
          <h3 className={`${item.Complete ? " line-through text-slate-500":" text-slate-800"} font-semibold transition-all ease-in `}>
           {item.task}
          </h3>
  {/* {console.log(item.id)} */}
          <p className={`${item.Complete ? " text-gray-300":" text-gray-500"} font-semibold transition-all ease-in `}>
            {item.Priority}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Edit Button */}
        <button  onClick={()=>handelEdit(item)}
          className="
          flex items-center gap-2
          bg-amber-500
          hover:bg-amber-600
          text-white
          px-4
          py-2
          rounded-lg
          transition-all
          duration-300
          hover:scale-105
          active:scale-95
          cursor-pointer
          shadow-sm 
          disabled:opacity-75
          disabled:bg-amber-400
           disabled:cursor-not-allowed
          "
          disabled={item.Complete}
        >
            
          <FaEdit />
          Edit
        </button>

        {/* Delete Button */}
        <button onClick={()=>dispatch(DeleteTodo(item.id))}
          className="
          flex items-center gap-2
          bg-red-500
          hover:bg-red-600
          text-white
          px-4
          py-2
          rounded-lg
          transition-all
          duration-300
          hover:scale-105
          active:scale-95
          cursor-pointer
          shadow-sm"
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;