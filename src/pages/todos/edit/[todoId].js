import { useState } from "react";
import { getTodo } from "@/api/todos/[todoId]";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "@/containers/Layout/Layout";

const EditTodo = ({ todo }) => {
  const router = useRouter();

  const [checked, setChecked] = useState(todo.isCompleted);

  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, {
        todo: { ...formData, isCompleted: checked },
      })
      .then((res) => router.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="flex bg-white flex-col justify-center items-center">
        <h6 className="my-8">Edit Todo</h6>
        <form
          className="flex flex-col justify-center w-full max-w-screen-md p-4 rounded-xl mx-auto"
          onSubmit={submitHandler}
        >
          <label htmlFor="todo-title">Title</label>
          <input
            id="todo-title"
            className="p-2 mt-2 mb-4 outline-none border border-gray-200 rounded-lg"
            type="text"
            name="title"
            placeholder="Add new Todo"
            value={formData.title}
            onChange={changeHandler}
          />
          <label htmlFor="todo-description">Description</label>
          <textarea
            id="todo-description"
            name="description"
            className="p-2 mt-2 mb-4 outline-none border border-gray-200 rounded-lg"
            placeholder="Description"
            value={formData.description}
            onChange={changeHandler}
          />
          <div className="flex gap-1">
            <label htmlFor="checked">Complete Todo</label>
            <input
              type="checkbox"
              name="checked"
              id="checked"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </div>
          <div className="flex mt-10">
            <button
              onClick={() => router.push("/")}
              className="bg-white p-2 w-1/2 text-blue-500 border border-blue-500 rounded-md ml-2"
            >
              Back
            </button>
            <button
              className="bg-blue-500 p-2 w-1/2 text-white rounded-md ml-2"
              type="submit"
            >
              Update Todo
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditTodo;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getTodo(query);
  // const todo = await Todo.findById(query.todoId)

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
