// import { todos } from "../../../data/todos";
import dbConnect from "@/server/utils/dbConnect"
import Todo from '@/server/models/todo'

dbConnect()

export default async function handler (req,res){

    const {method,body} = req
    
    if (method === "POST"){
        const {formData} = body
        await Todo.create({title : formData.title, description : formData.description})
        // const todos = await Todo.find({})
        const todos = await getTodos()
        return res.status(201).json({ message : 'todo Added!' ,todos})
    

    }else if (method === "GET") {
        const todos = await getTodos()
        // const todos = await Todo.find({})
        return res.status(200).json({todos})
    }
}



export async function getTodos (){
    const todos = await Todo.find({})
    return todos
}

