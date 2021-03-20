import React from "react";
import styled from "styled-components";

import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoTemplate from "./TodoTemplate";

export default function index() {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  );
}
