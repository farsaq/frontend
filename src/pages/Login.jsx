import { useState } from "react";
import { loginUser } from "../Services/api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    const data = await loginUser(email, password);

    if (data.token) {
      localStorage.setItem("token", data.token);
      onLogin(email);
      setMsg("Login successful");
    } else {
      setMsg(data.message || "Login failed");
    }
  };

  return (
    <div>
      <h3>Login</h3>

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}


