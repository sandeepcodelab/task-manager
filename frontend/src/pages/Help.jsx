import { HelpCircle, PlusCircle, Edit3, Trash2, Filter } from "lucide-react";
import Container from "../components/Container/Container";
import Button from "../components/Button";
import { Link } from "react-router";

function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 py-16">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-sky-500 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">Help & Support</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Need guidance? Here’s everything you need to know about using Task Manager.
          </p>
        </div>

        {/* FAQ / Guide Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Add Task */}
          <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <PlusCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-semibold text-white">How to Add a Task?</h2>
            </div>
            <p className="text-gray-400">
              Go to the <span className="text-sky-400">"Tasks"</span> page and click on the 
              <span className="text-green-400"> Add Task</span> button. Fill in the title, description, and priority, 
              then press <span className="text-green-400">Save</span>.
            </p>
          </div>

          {/* Card 2 - Edit Task */}
          <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Edit3 className="w-6 h-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-white">How to Edit a Task?</h2>
            </div>
            <p className="text-gray-400">
              On the tasks list, click the <span className="text-yellow-400">Edit</span> 
              icon beside the task. Update details and save changes instantly.
            </p>
          </div>

          {/* Card 3 - Delete Task */}
          <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-semibold text-white">How to Delete a Task?</h2>
            </div>
            <p className="text-gray-400">
              Click the <span className="text-red-400">Delete</span> icon beside a task. 
              Confirm your action, and the task will be removed permanently.
            </p>
          </div>

          {/* Card 4 - Filter & Priority */}
          <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-6 h-6 text-sky-500" />
              <h2 className="text-xl font-semibold text-white">How to Filter & Set Priority?</h2>
            </div>
            <p className="text-gray-400">
              Use the <span className="text-sky-400">Filter</span> options at the top of the 
              tasks page. You can filter tasks by priority (High, Medium, Low) or completion status.
            </p>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Still need help? Reach out to our support team anytime.
          </p>
          <Link to="/contact">
            <Button
              className="inline-block mt-4 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-semibold transition cursor-pointer"
              text="Contact Support"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Help;
