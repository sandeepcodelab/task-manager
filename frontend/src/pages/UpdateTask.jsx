import Container from "../components/Container/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";

function UpdateTask() {
  const [title, setTitle] = useState("Existing Task Title");
  const [desc, setDesc] = useState("This is the existing task description.");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("inprogress");

  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen">
        <div className="backdrop-blur-xl bg-gray-800/50 shadow-2xl rounded-2xl p-8 w-full max-w-2xl border border-gray-700/50">
          <h2 className="text-2xl font-extrabold text-center text-white mb-4 tracking-wide">
            Update Task
          </h2>
          <p className="text-gray-400 text-center mb-6 text-sm">
            Modify the details below and save your changes
          </p>

          <form className="space-y-5">
            {/* Title */}
            <div>
              <InputField
                type="text"
                placeholder="Enter task title"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
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
                <option value="">Select Priority</option>
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
                <option value="">Select Status</option>
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full text-white py-3 rounded-xl font-semibold bg-gradient-to-r from-green-600 to-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.7)] transition"
              text="Save Changes"
            />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default UpdateTask;
