"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Please fill all fields.");
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ username, password })
    );
    setMessage("Registration successful! Redirecting to login...");
    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "3rem auto",
        padding: "2rem",
        borderRadius: "16px",
        background: "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        fontFamily: "var(--font-geist-sans, sans-serif)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#222" }}>
        Register
      </h2>
      <form onSubmit={handleRegister}>
        <label style={{ fontWeight: 500, marginBottom: 4, display: "block" }}>
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            width: "100%",
            marginBottom: 16,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            fontSize: 16,
            outline: "none",
            transition: "border 0.2s",
          }}
        />
        <label style={{ fontWeight: 500, marginBottom: 4, display: "block" }}>
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginBottom: 24,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            fontSize: 16,
            outline: "none",
            transition: "border 0.2s",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: 8,
            border: "none",
            background: "#222",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Register
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: 16, color: "#16a34a" }}>
        {message}
      </p>
      <p style={{ textAlign: "center", marginTop: 12 }}>
        Already have an account?{" "}
        <a href="/login" style={{ color: "#2563eb", textDecoration: "underline" }}>
          Login
        </a>
      </p>
    </div>
  );
}