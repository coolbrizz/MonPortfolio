import { useState } from "react";
import logo from "../public/logo3.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-lg border border-gray-300">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <h1 className="text-2xl font-bold text-customBlue mt-4">
          Login pour accéder à la page administrateur
        </h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 mt-8 gap-1"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 mt-2 gap-1"
        />
        <button
          onClick={handleLogin}
          className="px-12 py-2 rounded-md border border-gray-300 mt-8 gap-1 bg-customBlue text-white hover:bg-customBlue2"
        >
          Login
        </button>
      </div>
    </div>
  );
}
