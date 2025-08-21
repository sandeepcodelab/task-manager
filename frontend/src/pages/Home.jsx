import Container from "../components/Container/Container";
import Button from "../components/Button";
import { Link } from "react-router";

function Home() {
  return (
    <div className="text-white">

      <Container>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Manage Your <span className="text-blue-500">Tasks</span> Effortlessly
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            Stay organized, boost productivity, and take control of your work
            with our smart task manager. Designed for teams and individuals who
            love efficiency. 🌟
          </p>
          <div className="flex gap-4">
            <Link to="/login">
              <Button text="Get Started" className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold cursor-pointer" />
            </Link>

            <Link to="/about">
              <Button text="Learn More" className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-700 transition font-semibold cursor-pointer" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 py-16">
          <div className="p-6 rounded-2xl bg-gray-800/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">📅 Smart Scheduling</h3>
            <p className="text-gray-400">
              Organize tasks with deadlines, reminders, and priority levels to
              never miss anything important.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-800/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🤝 Team Collaboration</h3>
            <p className="text-gray-400">
              Share tasks, assign responsibilities, and collaborate seamlessly
              with your team in real-time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-800/60 backdrop-blur-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">📊 Progress Tracking</h3>
            <p className="text-gray-400">
              Track your progress with detailed analytics and insights to keep
              improving every day.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to boost your <span className="text-blue-500">productivity</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of users already managing their tasks better.
          </p>
          <Link to="/signup">
            <Button text="Create Free Account" className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold cursor-pointer" />
          </Link>
        </section>
      </Container>
    </div>
  );
}

export default Home;
