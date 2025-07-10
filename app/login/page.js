"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("users");
    if (!stored) {
      setMessage("No user found. Please register first.");
      return;
    }

    const users = JSON.parse(stored);
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setMessage("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(user));
      setTimeout(() => router.push("/home"), 1200);
    } else {
      setMessage("Invalid credentials.");
    }
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
        Login
      </h2>
      <form onSubmit={handleLogin}>
        <label style={{ fontWeight: 500, marginBottom: 4, display: "block" }}>
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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
          Login
        </button>
      </form>
      <p
        style={{
          textAlign: "center",
          marginTop: 16,
          color: message === "Login successful!" ? "#16a34a" : "#dc2626",
        }}
      >
        {message}
      </p>
      <p style={{ textAlign: "center", marginTop: 12 }}>
        Don't have an account?{" "}
        <a
          href="/register"
          style={{
            color: "#2563eb",
            textDecoration: "underline",
          }}
        >
          Register
        </a>
      </p>
    </div>
  );
}
