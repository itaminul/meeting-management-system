"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, X } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    submenu: [],
  },
  {
    title: "Users",
    href: "/dashboard/users",
    submenu: [
      { title: "All Users", href: "/dashboard/users" },
      { title: "Add User", href: "/dashboard/users/add" },
    ],
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    submenu: [],
  },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-indigo-700 lg:translate-x-0 lg:static lg:inset-0 ${
          open ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-6 lg:py-3">
          <div className="text-2xl font-semibold text-white">Dashboard</div>
          <button
            onClick={() => setOpen(false)}
            className="text-white focus:outline-none lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-10">
          <ul>
            {menuItems.map((item) => (
              <li key={item.title} className="px-4 py-2">
                <div
                  className="flex items-center justify-between text-white hover:bg-indigo-600 rounded cursor-pointer"
                  onClick={() =>
                    setOpenSubmenu(
                      openSubmenu === item.title ? null : item.title
                    )
                  }
                >
                  <Link
                    href={item.href}
                    className={`block py-2 ${
                      pathname === item.href ? "font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.submenu.length > 0 &&
                    (openSubmenu === item.title ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    ))}
                </div>
                {openSubmenu === item.title && item.submenu.length > 0 && (
                  <ul className="ml-4 mt-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title} className="mb-2">
                        <Link
                          href={subItem.href}
                          className={`block py-2 text-white hover:bg-indigo-600 rounded ${
                            pathname === subItem.href ? "font-bold" : ""
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
