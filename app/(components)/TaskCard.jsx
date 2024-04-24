import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TaskCard = ({ task }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={task.priority} />
        <div className="ml-auto">
          <DeleteBlock id={task._id} />
        </div>
      </div>
      <Link href={`/TaskPage/${task._id}`} style={{ display: "contents" }}>
        <h4>{task.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{task.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs m-1">{formatTimestamp(task.createdAt)}</p>
            <ProgressDisplay progress={task.progres} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={task.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TaskCard;
