"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login"); // Redirect to login after logout
  };

  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-lg font-semibold">Welcome, Admin</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </header>
  );
};

export default Header;
