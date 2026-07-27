import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addNewTodo} from "../features/todoslice"
import TodoForm from './Inputform'
import TodoList from './TodoList'
import { FaClipboardList } from "react-icons/fa";

const Layout = () => {
  //   const initialValue=useSelector((state)=>state.todo.value)
  //   let dispatch=useDispatch()

  //   function handelSubmit(e){
  //    e.preventDefault()
  //   //  console.log(e.target[0].value)
  //    let obj={
  //     task:e.target[0].value,
  //     Complete:false
  //    }
  //    dispatch(addNewTodo(obj))
  //   //  console.log(initialValue)
  //   }
  return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-600 p-3 rounded-xl text-white">
            <FaClipboardList size={22} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Redux Todo List
            </h1>

            <p className="text-slate-500 text-sm">
              Organize your daily tasks
            </p>
          </div>
        </div>

        <TodoForm />

        <TodoList />
      </div>
    </div>

  )
}

export default Layout