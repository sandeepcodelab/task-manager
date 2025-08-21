import { Link } from "react-router";
import Button from "../components/Button";
import Container from "../components/Container/Container";
import { CheckCircle, ListChecks, Filter, Star } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen text-gray-200 py-16">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">About Task Manager</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Task Manager is your personal productivity partner — helping you stay
            organized, manage priorities, and never miss a deadline.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/60 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Add & Manage Tasks</h3>
            <p className="text-gray-400 text-sm">
              Quickly create tasks, mark them complete, and update them anytime.
            </p>
          </div>

          <div className="bg-gray-800/60 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <ListChecks className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Update & Delete</h3>
            <p className="text-gray-400 text-sm">
              Edit tasks when priorities shift or remove them once done.
            </p>
          </div>

          <div className="bg-gray-800/60 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Set Priority</h3>
            <p className="text-gray-400 text-sm">
              Highlight important tasks and focus on what really matters first.
            </p>
          </div>

          <div className="bg-gray-800/60 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <Filter className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Filter & Organize</h3>
            <p className="text-gray-400 text-sm">
              Sort and filter your tasks to keep your workflow clean and clear.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay organized. Stay productive.
          </h2>
          <p className="text-gray-400 mb-6">
            Task Manager gives you all the tools to manage your day efficiently.
          </p>
          <Link to="/login">
            <Button
              text="Get Started"
              className="bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-xl font-semibold text-white transition cursor-pointer"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default About;
