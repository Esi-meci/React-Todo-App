import React, { useEffect, useState } from "react";
import "./form.css";
import Button from "../button/Button";
import { v4 as uniqueId } from "uuid";
import Delete from "../delete/Delete_item";
import DeleteAll from "../delete/Delete_all";
import Time from "../time/Time";
import { EyeDropperIcon } from "@heroicons/react/16/solid";
import UpdateTask from "../update/Update";

export default function Form() {
  // const [tasks, setTask] = useState([]) starting our state with an empty array
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  ); //starting our state with data in the local storage and setting a default list incase its null or undefined

  const [editTask, setEditTask] = useState(null);
  const [editedText, setEditedText] = useState("");

  function Update(task, titles) {
    setEditTask(task); //opens the modal
    setEditedText(titles); // sets the model input value to the previous title
  }

  function handleSubmit(e) {
    // (e.target.querySelector('.taskInput').value) this will work for class
    //(typeof(e.currentTarget.taskInput.value)) while this will work for id
    e.preventDefault();
    // const inputValue = e.target.taskInput.value.trim()  //works perfectly

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const inputValue = document.querySelector(".InputElement");
    const InputValueValidate = inputValue.value.trim();
    const inputValues = InputValueValidate.split(",");
    if (InputValueValidate) {
      for (let i = 0; i < inputValues.length; i++) {
        const taskObject = {
          id: uniqueId(),
          title: inputValues[i],
          dates: [hours, minutes],
          // date:
        };
        setTask((prevTask) => [taskObject, ...prevTask]); //this works when using loop to update a state
        // setTask([taskObject, ...tasks])
      }
    } else {
      alert("can not add an empty task");
    }
    // e.target.taskInput.value = ''
    inputValue.value = " ";
  }

  // saving our tasks in localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <form action="" className="font-semibold " onSubmit={handleSubmit}>
        <label htmlFor="taskInput" className="px-3 text-2xl">
          Task:
        </label>
        <input
          type="text"
          id="taskInput"
          placeholder="Go to meeting"
          className="text-black InputElement h-10 rounded-md mx-5 p-6 text-center text-lg"
        />
        <Button className="font-medium ml-3 bg-pri border-none">
          Add Task
        </Button>
        <ul className="py-4">
          {tasks.length > 0 ? (
            tasks.map((task) => {
              const { id, title, dates } = task;
              const titles =
                title[0].toUpperCase() + title.slice(1).toLowerCase();
              return (
                <li
                  className="list-item text-
                            white text-2xl"
                  key={String(id)}
                >
                  {titles}
                  <span className="flex gap-2">
                    <Time date={dates} />
                    <Delete id={String(id)} tasks={tasks} setTask={setTask} />
                    <EyeDropperIcon
                      className="trash_btn"
                      onClick={() => Update(task, titles)}
                    />
                  </span>
                </li>
              );
            })
          ) : (
            <p className="empty-class"> Your tasks will display here </p>
          )}
        </ul>
      </form>

      {tasks.length > 0 ? <DeleteAll setTask={setTask} /> : null}

      {/* Edit Modal */}
      {editTask && (
        <UpdateTask
          setEditTask={setEditTask}
          setEditedText={setEditedText}
          editTask={editTask}
          editedText={editedText}
          setTask={setTask}
          tasks={tasks}
        />
      )}
    </>
  );
}
