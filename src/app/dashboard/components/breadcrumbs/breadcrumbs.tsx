"use client";

import { ChevronRight, Home, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export interface breadcrumbItem {
  href: string;
  label: string;
  icon?: "home" | "dashboard";
}
interface BreadcrumbsProps {
  items: breadcrumbItem[];
}
export default async function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div>
      <ol className="flex items-center whitespace-nowrap p-2 border-y border-gray-200">
        {items.map((item, index) => (
          <>
            <li key={item.href} className="inline-flex items-center">
              <Link
                href={item.href}
                className={`flex items-center text-sm ${
                  index === items.length - 1
                    ? "font-semibold text-gray-800"
                    : "text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                }`}
              >
                {item.icon === "home" && (
                 
                   <Home className="shrink-0 me-3 size-4" />
                )}
                {item.icon === "dashboard" && (
                  <LayoutDashboard className="shrink-0 me-3 size-4" />
                )}
                {item.label}
              </Link>
              {index < items.length - 1 && (
                <ChevronRight className="shrink-0 mx-2 size-4 text-gray-400" />
              )}
            </li>
            <li className="inline-flex items-center">
              <Link
                className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                href="#"
              >
                <svg
                  className="shrink-0 me-3 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                </svg>
                App Center
                <svg
                  className="shrink-0 mx-2 size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </li>
            <li
              className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Application
            </li>
          </>
        ))}
      </ol>
    </div>
  );
}
