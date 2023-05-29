import Layout from "@/containers/Layout/Layout";
import { getTodo } from "@/api/todos/[todoId]";

const TodoDetails = ({ todo }) => {
  return (
    <Layout>
      <div>
        <h3>Todo Details Page</h3>
        <h1>Title : {todo.title}</h1>
        <h1>Description : {todo.description}</h1>
      </div>
    </Layout>
  );
};

export default TodoDetails;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getTodo(query);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
