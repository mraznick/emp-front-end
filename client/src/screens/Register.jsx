import { useState } from "react";
import { createUser } from "../services/users.js";
import { useNavigate } from "react-router-dom";

export default function RegisterUser({setUser}) {
  const [form, setForm] = useState({
    Email: "",
    Full_Name: "",
    Username: "",
    Password: ""
  })

  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    //Need to add logic that stops user creation if
    //email or username already exists
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await createUser(form)
    setUser(newUser);
    navigate("/pictures");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          name="Email"
          value={form.Email}
          type="text"
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          name="Full_Name"
          value={form.Full_Name}
          type="text"
          onChange={handleChange}
          placeholder="Full Name"
        />

        <input
          name="Username"
          value={form.Username}
          type="text"
          onChange={handleChange}
          placeholder="Username"
        />

        <input
          name="Password"
          value={form.Password}
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  )

}
