import { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../public/logo3.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(email, password);
      navigate("/admin");
    } catch (err) {
      setError("Email ou mot de passe incorrect");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center bg-white p-8 rounded-md shadow-lg border border-gray-300 max-w-md w-full"
      >
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <h1 className="text-2xl font-bold text-customBlue mt-4 text-center">
          Login pour accéder à la page administrateur
        </h1>

        {error && (
          <div className="w-full mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 mt-8"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 mt-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full px-12 py-2 rounded-md border border-gray-300 mt-8 bg-customBlue text-white hover:bg-customBlue2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Connexion..." : "Login"}
        </button>
      </form>
    </div>
  );
}
