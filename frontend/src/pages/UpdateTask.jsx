import Container from "../components/Container/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function UpdateTask() {
    
    const {taskId} = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({})
    const [apiError, setApiError] = useState({});

    useEffect(() => {
        axios.get(`/api/v1/task/edit/${taskId}`)
        .then((response) => {
            setTask(response?.data?.task)
        })
        .catch((err) => {
            setApiError(err.response)
        })
    }, [])
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTitle(task?.title || "")
        setDesc(task?.description || "")
        setPriority(task?.priority || "")
        setStatus(task?.status || "")
    }, [task])

    const formHandler = (e) => {
        e.preventDefault()
        setApiError({})

        if(!title){
            setTitleErr("Title required.")
            return;
        }

        setLoading(true);

        axios.patch(`/api/v1/task/update/${taskId}`, {
            title,
            description: desc,
            priority,
            status
        })
        .then((response) => {
            if(response.status === 200) navigate('/dashboard')
        })
        .catch((err) => {
            setApiError(err.response)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (

        <Container>
            <div className="flex items-center justify-center min-h-screen">
                <div className="backdrop-blur-xl bg-gray-800/50 shadow-2xl rounded-2xl p-8 w-full max-w-2xl border border-gray-700/50 my-14">
                    <h2 className="text-2xl font-extrabold text-center text-white mb-4 tracking-wide">
                        Update Task
                    </h2>

                    {
                        (apiError?.data?.message || apiError?.data) ? <p className="text-red-500 text-center font-bold pb-2">{apiError?.data?.message || apiError?.data}</p> : null
                    }

                    <form onSubmit={formHandler} className="space-y-5">
                        {/* Title */}
                        <div>
                            <InputField
                                type="text"
                                placeholder="Enter task title"
                                label="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {
                                titleErr ? <span className="text-red-500 text-sm">{titleErr}</span> : null
                            }
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block mb-2 font-semibold text-white">
                                Description
                            </label>
                            <textarea
                                placeholder="Enter task description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-900/60 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Priority */}
                        <div>
                            <label className="block mb-2 font-semibold text-white">
                                Priority
                            </label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-900/60 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block mb-2 font-semibold text-white">
                                Status
                            </label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-900/60 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="pending">Pending</option>
                                <option value="inprogress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        {/* Button */}
                        <Button
                            type="submit"
                            className={`w-full text-white py-3 rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(34,197,94,0.7)] transition ${ loading ? 'bg-gradient-to-r from-green-500 to-green-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-500 cursor-pointer'}`}
                            disabled={loading}
                            text={
                                loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>
                                        Save Changes
                                    </div>
                                ) : (
                                    "Save Changes"
                                )
                            }
                        />
                    </form>
                </div>
            </div>
        </Container>

  );
}

export default UpdateTask;
