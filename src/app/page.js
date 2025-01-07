"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        if (!token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        const res = await fetch("/api/user/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user data");

        const data = await res.json();

        setIsAuthenticated(true); // User is authenticated
        setIsAdmin(data.role === "admin"); // Check if the user is an admin
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    setIsAuthenticated(false); // Update state to reflect logged-out status
    router.push("/login"); // Redirect to login page
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Library Management System
        </h1>
        <p className="text-center text-gray-600">
          Manage your library efficiently with options to add, list, and borrow
          books.
        </p>
        <nav className="space-y-4">
          {isAuthenticated ? (
            <>
              {isAdmin && (
                <Link
                  href="/add-book"
                  className="block w-full text-center text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-200"
                >
                  Add New Book
                </Link>
              )}
              <Link
                href="/all-books"
                className="block w-full text-center text-lg font-medium text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition duration-200"
              >
                List All Books
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-center text-lg font-medium text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block w-full text-center text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block w-full text-center text-lg font-medium text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition duration-200"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
