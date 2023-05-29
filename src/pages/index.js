import { useState } from "react";
import TodoForm from "@/components/todoList/AddNewTodo";
import TodoList from "@/components/todoList/TodoList";
import axios from "axios";
import { getTodos } from "@/api/todos";
import Layout from "@/containers/Layout/Layout";


export default function Home({todos}) {

  const [data , setData] = useState(todos)
 
 
  const deleteHandler = (id)=>{
    axios.delete(`/api/todos/${id}`)
    .then(({data}) => setData(data.todos))
    .catch(err => console.log(err))
  }

  const addTodo = (e,formData) =>{
    e.preventDefault()
    axios.post(`/api/todos/`,{formData})
    .then(({data}) => setData(data.todos))
    .catch(err => console.log(err))
  }

  const completeHandler = (id)=>{
    axios.put(`/api/todos/complete/${id}`)
    .then(({data}) => {
      setData(data.todos)
    })
    .catch(err => console.log(err))
  }

  return (
     <Layout>
         <div className="container flex flex-col md:flex-row items-start  gap-x-4 xl:max-w-screen-xl mx-auto">
          <TodoForm addTodo={addTodo}/>
          <TodoList data={data} onDelete={deleteHandler} onComplete={completeHandler}/>
        </div>
     </Layout>
  );
}



export async function getServerSideProps (){

  const todos = await getTodos()

  return{
    props : {
      todos : JSON.parse(JSON.stringify(todos))
    }
  }

}