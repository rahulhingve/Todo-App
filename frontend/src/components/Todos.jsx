
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({ todos }) {
    return (
      <div>
        {todos.map(function (todo,index) {
          return (
            <div key={index}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
            </div>
          );
        })}
      </div>
    );
  }
  