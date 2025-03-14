import { EyeDropperIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
function Update({ id, tasks, setTask }) {
  const [title, setTitle] = useState("");

  function updateTask() {
    let filteredTask = tasks.filter((eachTask) => id === eachTask.id);

    // crazy

    setTitle((filteredTask[0].title = "you"));
    console.log(filteredTask[0]);
  }

  return <EyeDropperIcon className="trash_btn" onClick={updateTask} />;
}
export default Update;
