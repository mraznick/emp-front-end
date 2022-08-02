import { useState } from "react";
import { login } from "../services/users.js";
import { useNavigate } from "react-router-dom";


export default function Login({setUser}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(form)
    setUser(user);
    navigate("/pictures");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={form.email}
          type="text"
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          name="password"
          value={form.password}
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
