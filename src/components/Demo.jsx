import React, { useState } from "react";

import axios from "axios";
// import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a successful form submission
    console.log("Form submitted:", formData);

    // Set a success message
    setSuccessMessage("Message sent successfully!");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Clear the success message after a delay (optional)
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/alllqpda", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }} className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <form  onSubmit={handleSubmit}    action="https://getform.io/f/alllqpda"
            method="POST"
             className="bg-slate-200 w-96 px-8 py-6 rounded-xl pt-4 pb-4" >
        <div >
          <label>
            Name:
            <input className=" pt-4 shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email is require:
            <input  className=" pt-4 mt-4 shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label >
            Message:
            <textarea className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit"  className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
      </form>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default FormExample;
