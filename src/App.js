import TodoList from "./TodoList";
import styled, { createGlobalStyle } from "styled-components";
import { TodoContext } from "./TodoContext";
const GlobalStyle = createGlobalStyle`
    body{
        background-color :#e9ecef;
        margin: 0px;
        padding: 0px;
    }
`;

const Title = styled.div`
  width: 300px;
  padding-top: 40px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;

const TodoListPosition = styled.div`
  margin-top: 50px;
  margin: 0 auto;
`;

function App() {
  return (
    <TodoContext>
      <GlobalStyle />

      {/* <Title>Jade's Widget</Title> */}
      <TodoList></TodoList>
    </TodoContext>
  );
}

export default App;
