import React from "react";
import styled from "styled-components";
import { UseTodoState } from "../TodoContext";
const TodoHeadBlock = styled.div`
  width: 100%;
  height: 165px;
  margin-top: 45px;
  padding-left: 35px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0px;
    font-weight: 5px;
    color: #3a4045;
  }
  h2 {
    margin-top: 5px;
    font-weight: 300;
    color: #a0a0a0;
  }
  h3 {
    margin-top: 40px;
    font-weight: 5px;
    color: #20c997;
  }
`;

const getDay = (time) => {
  switch (time.getDay()) {
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    case 0:
      return "일";
  }
};
export default function TodoHead() {
  const count = UseTodoState().filter((item) => item.done === false).length;
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const day = getDay(time);

  return (
    <TodoHeadBlock>
      <h1>
        {year}년 {month}월 {date}일
      </h1>
      <h2>{day}요일</h2>
      <h3>할 일 {count}개 남음</h3>
    </TodoHeadBlock>
  );
}
