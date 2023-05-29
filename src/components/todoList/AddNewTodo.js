import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isShow, setIsShow] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isShow)
    return (
      <div className="flex justify-center w-2/3 md:w-1/3 mb-4 rounded-lg">
        <button
          onClick={() => setIsShow(true)}
          className="bg-blue-500 px-10 py-2 font-bold text-white rounded-md ml-2"
        >
          Add New Todo ?
        </button>
      </div>
    );

  return (
    <div className="mx-auto w-2/3 md:w-1/3 mb-4 rounded-lg bg-white">
      <form
        className="flex flex-col justify-center w-full max-w-screen-md p-4 rounded-xl mx-auto"
        onSubmit={(e) => addTodo(e, formData)}
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
        <div className="flex mt-10">
          <button
            onClick={() => setIsShow(false)}
            className="bg-white p-2 w-1/2 text-blue-500 border border-blue-500 rounded-md ml-2"
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 p-2 w-1/2 text-white rounded-md ml-2"
            type="submit"
          >
            Add New Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
