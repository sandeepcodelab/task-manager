import { Plus, CheckCircle, Clock, ListTodo, Pencil, Trash2, Filter, Flag } from "lucide-react";
import { useState } from "react";

function Dashboard() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const tasks = [
    { id: 1, title: "Finish Dashboard Design", status: "in-progress", priority: "high" },
    { id: 2, title: "Update API Integration", status: "completed", priority: "medium" },
    { id: 3, title: "Prepare Team Meeting Notes", status: "pending", priority: "low" },
    { id: 4, title: "Fix Bug in Auth Flow", status: "pending", priority: "high" },
    { id: 5, title: "Write Documentation", status: "completed", priority: "low" },
  ];

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = statusFilter === "all" || task.status === statusFilter;
    const priorityMatch = priorityFilter === "all" || task.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="p-6 space-y-6 text-white">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-sky-700 to-blue-800 rounded-2xl p-6 shadow-lg flex flex-wrap justify-between items-center gap-y-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, John</h1>
          <p className="text-gray-200 mt-2">Here’s an overview of your tasks today.</p>
        </div>
        <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-xl transition">
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 shadow-md hover:scale-105 transition">
          <ListTodo className="w-10 h-10 text-sky-400" />
          <div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-gray-400">Total Tasks</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 shadow-md hover:scale-105 transition">
          <Clock className="w-10 h-10 text-yellow-400" />
          <div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-gray-400">Pending</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 shadow-md hover:scale-105 transition">
          <CheckCircle className="w-10 h-10 text-green-400" />
          <div>
            <p className="text-2xl font-bold">7</p>
            <p className="text-gray-400">Completed</p>
          </div>
        </div>
      </div>

      {/* Task List Section */}
      <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
        {/* Header + Filters */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
          <h2 className="text-xl font-bold">Your Tasks</h2>
          <div className="flex flex-wrap gap-4">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-300" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg outline-none"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div className="flex items-center gap-2">
              <Flag className="w-5 h-5 text-gray-300" />
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg outline-none"
              >
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Task Items */}
        <ul className="space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-wrap items-center justify-between gap-y-4 bg-gray-700 p-5 rounded-xl shadow-md hover:bg-gray-600 transition"
            >
              <div>
                <p className="font-medium text-lg">{task.title}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {/* Status */}
                  <span
                    className={`flex items-center gap-2 text-xs font-bold px-4 py-1 rounded-full tracking-wide shadow-sm ${
                    task.status === "completed"
                      ? "bg-green-500 text-white"
                      : task.status === "in-progress"
                      ? "bg-blue-500 text-white"
                      : "bg-yellow-500 text-black"
                    }`}
                  >
                    {task.status}
                  </span>

                  {/* Priority */}
                  <span
                    className={`flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-lg border-2        shadow-inner ${
                    task.priority === "high"
                      ? "border-red-500 text-red-400 bg-red-900/20"
                      : task.priority === "medium"
                      ? "border-orange-400 text-orange-300 bg-orange-900/20"
                      : "border-green-400 text-green-300 bg-green-900/20"
                    }`}
                  >
                    <Flag className="w-3 h-3" />
                    {task.priority}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="text-blue-400 hover:text-blue-500 transition">
                  <Pencil className="w-5 h-5" />
                </button>
                <button className="text-red-400 hover:text-red-500 transition">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}

          {filteredTasks.length === 0 && (
            <p className="text-gray-400 text-center mt-6">No tasks found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
