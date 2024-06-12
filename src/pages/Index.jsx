import { useState } from "react";
import { Container, VStack, Heading } from "@chakra-ui/react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Index = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Todo App
        </Heading>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </VStack>
    </Container>
  );
};

export default Index;