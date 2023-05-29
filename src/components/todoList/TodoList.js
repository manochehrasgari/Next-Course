import Link from "next/link";

const TodoList = ({ data, onDelete, onComplete }) => {
  return (
    <>
      <div className="w-2/3 flex flex-col bg-white mx-auto p-6 rounded-lg">
        {!data.length && (
          <div className="mx-auto text-lg font-bold">Not Todos</div>
        )}
        {data.map((todo) => {
          return (
            <div
              key={todo._id}
              className="p-4 border border-gray-200 mb-2 rounded-lg flex justify-between items-center"
            >
              <Link href={`/todos/${todo._id}`}>
                <span className={`${todo.isCompleted ? "line-through" : ""}`}>
                  {todo.title}
                </span>
              </Link>

              <div className="flex">
                {todo.isCompleted ? (
                  <span className="mr-4" onClick={() => onComplete(todo._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-green-800 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                ) : (
                  <span
                    onClick={() => onComplete(todo._id)}
                    className="w-6 h-6 border mr-6 mt-[6px] cursor-pointer border-black rounded-full"
                  ></span>
                )}

                <span className="mr-4">
                  <Link href={`/todos/edit/${todo._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-blue-700 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                </span>

                <span onClick={() => onDelete(todo._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-red-500 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
