import { useState } from "react";
import { registerUser } from "../Services/api";

export default function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    const data = await registerUser(name, email, password);

    if (data.token) {
      localStorage.setItem("token", data.token);
      onRegister(email);
      setMsg("Registered successfully");
    } else {
      setMsg(data.message);
    }
  };

  return (
    <div>
      <h3>Register</h3>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}
