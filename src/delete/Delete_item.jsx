import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Delete({ id, tasks, setTask }) {
  
  function deleteSingleTask() {
    const filteredTask = tasks.filter((eachTask) => id === eachTask.id);
    tasks.splice(tasks.indexOf(filteredTask[0]), 1);
    setTask([...tasks]);
  }

  return <TrashIcon className="trash_btn text-xl" onClick={deleteSingleTask} />;
}
