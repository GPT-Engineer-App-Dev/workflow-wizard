import { useState } from "react";
import { HStack, Input, IconButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <HStack spacing={4}>
        <Input
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <IconButton
          aria-label="Add todo"
          icon={<FaPlus />}
          type="submit"
        />
      </HStack>
    </form>
  );
};

export default TodoInput;