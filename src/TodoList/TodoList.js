import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { UseTodoState, UseTodoDispatch } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  /* background-color: gray; */
  display: flex;
  padding: 20px 32px;
  padding-bottom: 48px;
  flex-direction: column;
  overflow-y: auto;
`;

export default function TodoList() {
  const itmes = UseTodoState();
  const dispatch = UseTodoDispatch();

  const onClick = (id) => {
    dispatch({ type: "TOGGLE", id: id });
  };
  const onDelete = (id) => {
    dispatch({ type: "DELETE", id: id });
  };
  return (
    <TodoListBlock>
      {itmes.map((item) => (
        <TodoItem
          onClick={onClick}
          onDelete={onDelete}
          key={item.id}
          id={item.id}
          text={item.desc}
          done={item.done}
        />
      ))}
    </TodoListBlock>
  );
}
