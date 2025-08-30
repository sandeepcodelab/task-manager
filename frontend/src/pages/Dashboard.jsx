import { Plus, CheckCircle, Clock, ListTodo, Pencil, Trash2, Filter, Flag, PackageOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import axios from "axios";
import { Link } from "react-router";
import Button from "../components/Button";

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user"));
    const [tasks, setTasks] = useState([])
    const [total, setTotal] = useState(0)
    const [pending, setPending] = useState(0)
    const [completed, setCompleted] = useState(0)
    const [allTaskErr, setAllTaskErr] = useState({})
    const [deleteErr, setDeleteErr] = useState({})

    const fetchTask = async () => {
        axios.get("/api/v1/task/all")
        .then((res) => {
            setTasks(res?.data?.tasks)
            setTotal(res?.data?.total)
            setPending(res?.data?.pending)
            setCompleted(res?.data?.completed)
        })
        .catch((err) => {
            setAllTaskErr(err.response)
        });
    }

    useEffect(() => {
        fetchTask();
    }, [])

    const [statusFilter, setStatusFilter] = useState("all");
    const [priorityFilter, setpriorityFilter] = useState("all");

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this task?")){

            axios.delete(`/api/v1/task/delete/${id}`)
            .then((res) => {
                fetchTask();
            })
            .catch((err) => {
                setDeleteErr(err.response)
            })
        }
    }

    return (

        <Container>
            <div className="p-6 space-y-6 text-white">
                {/* Welcome Section */}

                {
                    (allTaskErr?.data?.message || deleteErr?.data?.message) ? <p className="text-red-500 text-center font-bold pb-2">{allTaskErr?.data?.message || deleteErr?.data?.message || ""}</p> : null
                }

                <div className="bg-gradient-to-r from-sky-700 to-blue-800 rounded-2xl p-6 shadow-lg flex flex-wrap justify-between items-center gap-y-4">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome, { user ? user.name : null }</h1>
                        <p className="text-gray-200 mt-2">Here’s an overview of your tasks today.</p>
                    </div>
                    <Link to="/add-task">
                        <Button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-xl transition cursor-pointer"
                        text="Add Task"
                        icon={<Plus className="w-4 h-4 mr-2" />}
                        />
                    </Link>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 shadow-md hover:scale-105 transition">
                        <ListTodo className="w-10 h-10 text-sky-400" />
                        <div>
                            <p className="text-2xl font-bold">{total}</p>
                            <p className="text-gray-400">Total Tasks</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 shadow-md hover:scale-105 transition">
                        <Clock className="w-10 h-10 text-yellow-400" />
                        <div>
                            <p className="text-2xl font-bold">{pending}</p>
                            <p className="text-gray-400">Pending</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 shadow-md hover:scale-105 transition">
                        <CheckCircle className="w-10 h-10 text-green-400" />
                        <div>
                            <p className="text-2xl font-bold">{completed}</p>
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
                    {tasks.map((task) => (
                        <li
                        key={task._id}
                        className="flex flex-wrap items-center justify-between gap-y-4 bg-gray-700 p-5 rounded-xl shadow-md hover:bg-gray-600 transition"
                        >
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 w-full">
                            <div className="sm:w-7/8 sm:pr-10">
                                <p className="font-bold text-xl">{task.title}</p>
                                {
                                    task.description ? <p className="text-sm py-3">{task.description}</p> : null
                                }
                                <div className="flex flex-wrap gap-3 mt-2">
                                    {/* Status */}
                                    <span
                                        className={`flex items-center gap-2 text-xs font-bold px-4 py-1 rounded-full tracking-wide shadow-sm capitalize ${
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
                                        className={`flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-lg border-2 shadow-inner capitalize ${
                                            task.priority === "high"
                                            ? "border-red-500 text-red-400 bg-red-900/20"
                                            : task.priority === "medium"
                                            ? "border-orange-500 text-orange-400 bg-orange-900/20"
                                            : "border-green-500 text-green-400 bg-green-900/20"
                                            }`}
                                    >
                                        <Flag className="w-3 h-3" />
                                        {task.priority}
                                    </span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 px-5 sm:w-1/8">
                                <Link to={`/update-task/${task._id}`}>
                                    <Button className="text-blue-400 hover:text-blue-500 transition cursor-pointer"
                                        icon={<Pencil className="w-5 h-5" />}
                                    />
                                </Link>
                                <Button className="text-red-400 hover:text-red-500 transition -mt-2 cursor-pointer"
                                    icon={<Trash2 className="w-5 h-5" />}
                                    onClick={() => handleDelete(task._id)}
                                />
                            </div>
                        </div>
                    </li>
                ))}

                {
                    tasks.length < 1 ? (
                        <div className="flex justify-center items-center gap-3 py-4">
                            <PackageOpen className="w-15 h-auto text-gray-700" />
                            <h3 className="text-3xl font-bold text-gray-700">Empty</h3>
                        </div>
                    ) : null
                }
                </ul>
            </div>
        </div>
    </Container>

  );
}

export default Dashboard;
