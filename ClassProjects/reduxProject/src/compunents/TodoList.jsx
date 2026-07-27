import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

function TodoList({item}) {
       const initialValue=useSelector((state)=>state.todo.value)
  return (
    <div>

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-semibold text-slate-700">
          Today's Tasks
        </h2>

        <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm">
          {initialValue.length} Tasks
        </span>

      </div>

      <div className="space-y-4">
         {initialValue?.map((item)=>{
         return <TodoCard item={item} key={item.id}/>
         })}
        

        {/* <TodoCard />

        <TodoCard /> */}

      </div>

    </div>
  );
}

export default TodoList;