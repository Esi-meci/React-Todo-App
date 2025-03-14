function UpdateTask({setEditedText, setEditTask, editTask, editedText, tasks, setTask}) {
  function saveEdit(e) {
    e.preventDefault()
    const updatedTask = tasks.map((task) =>
      task.id === editTask.id ? { ...task, title: editedText } : task
    );
    setTask(updatedTask);
    CloseModal(); //this closes the modal
  }

  function CloseModal() {
    setEditTask(null);
  }

  return (
    <div>
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
    </div>
  );
}
export default UpdateTask;
