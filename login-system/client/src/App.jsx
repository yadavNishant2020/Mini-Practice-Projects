import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);

    try {
      const response = await fetch("http://localhost:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data successfully sent to the server");
      } else {
        console.error("Failed to send data to the server");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-md shadow-md text-white ">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login System
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
