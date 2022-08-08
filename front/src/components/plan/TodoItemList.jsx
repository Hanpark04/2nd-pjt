import React, { useRef, useState, useEffect } from "react";
import check from "@images/icon/done_black.svg";
// import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import TodoItem from "./TodoItem";
import { getTodo, addTodo } from "../../apis/plan";

function TodoItemList({ listId }) {
  const todoRef = useRef();
  const [todoList, setTodoList] = useState("");
  const todoListId = listId;

  const addTask = async () => {
    const task = todoRef.current.value;
    // console.log(task);
    const res = await addTodo(todoListId, task);
    setTodoList([...todoList, ...res]);
  };

  useEffect(() => {
    // todoList 불러오기
    async function getTodoList() {
      const res = await getTodo(todoListId);
      setTodoList(res);
    }
    getTodoList();
    // console.log(`${todoListId}aaa`);
  }, [todoListId]);
  console.log(todoList);

  return (
    <>
      <div className="plan_detail_box_left_title notoBold fs-30">TODO-LIST</div>
      <div className="plan_detail_box_left_input flex align-center">
        <input
          ref={todoRef}
          type="text"
          placeholder="TODO-LIST를 작성해 보세요!!"
          className="fs-16 notoMid"
        />
        <button
          onClick={addTask}
          type="button"
          className="flex justify-center align-center"
        >
          <img src={check} alt="coverImg" />
        </button>
      </div>
      <div className="plan_detail_box_left_list">
        {todoList.length !== 0 &&
          todoList.map(({ task, done, saveId, todoId }) => (
            <TodoItem
              key={v4()}
              task={task}
              done={done}
              saveId={saveId}
              todoId={todoId}
            />
          ))}
      </div>
    </>
  );
}

export default TodoItemList;
