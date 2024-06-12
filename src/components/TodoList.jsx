import { VStack } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <VStack spacing={4} width="100%">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </VStack>
  );
};

export default TodoList;