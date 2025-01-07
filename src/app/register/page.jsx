"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
    adminKey: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Registration successful!");
      router.push("/login");
    } else {
      const error = await response.json();
      alert(error.message || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl text-zinc-700 font-bold mb-4">Register</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border text-zinc-700 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border text-zinc-700 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full border text-zinc-700 p-2 rounded"
          />
        </div>
        {formData.role === "admin" && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Admin Key
            </label>
            <input
              type="text"
              name="adminKey"
              onChange={(e) =>
                setFormData({ ...formData, adminKey: e.target.value })
              }
              className="w-full border text-zinc-700 p-2 rounded"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <p className="text-center text-black">
        Already have a account 
        <Link href={'/login'} className="ml-4 text-green-400 underline">Login</Link>
      </p>
      </form>
      
      
    </div>
  );
}
