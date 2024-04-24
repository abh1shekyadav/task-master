import TaskCard from "./(components)/TaskCard";

const getTasks = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/Tasks", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tasks", error);
  }
};
const Dashboard = async () => {
  const { tasks } = await getTasks();
  const uniqueCategories = [...new Set(tasks?.map(({ category }) => category))];
  return (
    <div className="p-5 ">
      <div>
        {tasks &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4"></div>
              {tasks
                .filter((task) => task.category === uniqueCategory)
                .map((filteredTask, _index) => (
                  <TaskCard id={_index} key={_index} task={filteredTask} />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
