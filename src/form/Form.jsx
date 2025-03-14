import React, { useEffect, useState } from "react";
import "./form.css";
import Button from "../button/Button";
import { v4 as uniqueId } from "uuid";
import { list } from "postcss";
import Delete from "../delete/Delete_item";
import DeleteAll from "../delete/Delete_all";
import Time from "../time/Time";
import { EyeDropperIcon } from "@heroicons/react/16/solid";

export default function Form() {
  // const [tasks, setTask] = useState([]) starting our state with an empty array
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  ); //starting our state with data in the local storage and setting a default list incase its null or undefined

  const [editTask, setEditTask] = useState(null);
  const [editedText, setEditedText] = useState("");

  function Update(task, tiles) {
    setEditTask(task); //opens the modal
    setEditedText(tiles); // sets the model input value to the previous title
  }

  function saveEdit() {
    // const cloneTasks = tasks;
    // const CurrentTask = cloneTasks.filter((tod) => tod.id === editTask.id);
    // CurrentTask[0].title = editedText;
    // cloneTasks.splice(cloneTasks.indexOf(CurrentTask[0]), 1, CurrentTask[0]);
    // console.log(cloneTasks);
    // setTask(cloneTasks);
    const updatedTask = tasks.map((task) =>
      task.id === editTask.id ? { ...task, title: editedText } : task
    );
    console.log(updatedTask);
    setTask(updatedTask);
    CloseModal(); //this closes the modal
  }

  function CloseModal() {
    setEditTask(null);
  }

  function handleSubmit(e) {
    // console.log(e.target)
    // console.log(e.target.querySelector('.taskInput').value) this will work for class
    //console.log(typeof(e.currentTarget.taskInput.value)) while this will work for id
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
    // console.log(new Date())
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
        <div
          className="flex justify-center items-center absolute inset-0 bg-opacity-70 bg-black text-lg"
          onClick={CloseModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-pri p-5 rounded"
          >
            <h3 className="pl-2">Edit {editedText} Task </h3>
            <form onSubmit={saveEdit}>
              <input
                type="text"
                value={editedText}
                className="text-black text-lg p-1 m-1.5 rounded"
                onChange={(e) => setEditedText(e.target.value)}
                autoFocus
              />
              <input
                type="button"
                className="rounded-[5px] font-medium bg-red-800 py-[3px] px-2.5 border-solid border hover:bg-red-950"
                onClick={CloseModal}
                value="Cancle"
              />
              <input
                type="submit"
                className="rounded-[5px] font-medium ml-3 bg-green-700 py-[3px] px-3 border border-solid border-white"
                value="Save"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
