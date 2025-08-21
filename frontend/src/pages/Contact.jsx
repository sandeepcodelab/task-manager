import { Mail, Phone, MapPin } from "lucide-react";
import Container from "../components/Container/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Contact() {
  return (
    <div className="min-h-screen text-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions, feedback, or need support? We’d love to hear from you.  
            Fill out the form or reach us directly using the details below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/60 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-white">Send a Message</h2>
            <form className="space-y-4">
  
              <InputField
                  type="text"
                  placeholder="Enter your name"
                  label="Name"
              />
              
              <InputField
                  type="email"
                  placeholder="Enter your email"
                  label="Email"
              />

              <div>
                <label className="block text-gray-300 mb-1 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-sky-600 outline-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                text="Send Message"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
              />
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-sky-500" />
              <p className="text-gray-300">support@taskmanager.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-500" />
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-500" />
              <p className="text-gray-300">Bangalore, India</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
