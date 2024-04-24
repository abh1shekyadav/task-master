import TaskForm from "@/app/(components)/TaskForm";

const getTaskById = async (id) => {
  const res = await fetch(`http://localhost:3001/api/Tasks/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get task.");
  }
  return res.json();
};
const TaskPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTaskData = {};
  if (EDITMODE) {
    updateTaskData = await getTaskById(params.id);
    updateTaskData = updateTaskData.foundTask;
  } else {
    updateTaskData = {
      _id: "new",
    };
  }
  return <TaskForm task={updateTaskData} />;
};

export default TaskPage;
