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
        <>
          {items.map((item, index) => (
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
          ))}
        </>
      </ol>
    </div>
  );
}
