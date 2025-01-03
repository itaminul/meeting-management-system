"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

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

export default function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <aside className="bg-indigo-700 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className="mb-2">
              <div
                className="flex items-center justify-between p-2 hover:bg-indigo-600 rounded cursor-pointer"
                onClick={() =>
                  setOpenSubmenu(openSubmenu === item.title ? null : item.title)
                }
              >
                <Link href={item.href}>{item.title}</Link>
                {item.submenu.length > 0 &&
                  (openSubmenu === item.title ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  ))}
              </div>
              {openSubmenu === item.title && item.submenu.length > 0 && (
                <ul className="ml-4">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.title} className="my-2">
                      <Link
                        href={subItem.href}
                        className="block p-2 hover:bg-indigo-600 rounded"
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
    </aside>
  );
}
