import React, { useState } from "react";
import check from "@images/icon/done_black.svg";
import checkGray from "@images/icon/done_gray.svg";
import { modifyTodo } from "../../apis/plan";

function TodoItem({ task, done, saveId, todoId }) {
  // console.log(task);
  // // console.log(done);
  // console.log(saveId);
  // console.log(todoId);

  const [isDone, setIsDone] = useState(done);

  const changeState = async () => {
    await modifyTodo(todoId, task, isDone, saveId);
    setIsDone(!isDone);
  };

  return (
    <div className="todo_box flex align-center ">
      {isDone && (
        <button
          onClick={changeState}
          type="button"
          className="todo_box_btn_done flex justify-center align-center"
        >
          <img src={check} alt="coverImg" />
        </button>
      )}
      {!isDone && (
        <button
          onClick={changeState}
          type="button"
          className="todo_box_btn_yet flex justify-center align-center"
        >
          <img src={checkGray} alt="coverImg" />
        </button>
      )}
      <div className="">
        <p
          className={
            isDone
              ? "fs-14 notoMid todo_box_text_done"
              : "fs-14 notoMid todo_text_yet"
          }
        >
          {task}
        </p>
      </div>
    </div>
  );
}

export default TodoItem;
