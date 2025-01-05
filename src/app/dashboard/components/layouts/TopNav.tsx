"use client";

import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

type TopNavProps = {
  onMenuButtonClick: () => void;
};

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });
    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={onMenuButtonClick}
                className="p-2 rounded-md text-gray-400 lg:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
              <span className="text-2xl font-bold text-indigo-600 ml-2 lg:ml-0">
                Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
