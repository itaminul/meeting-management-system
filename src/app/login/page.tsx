"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../dashboard/layout";
import { StatCard } from "../dashboard/components/card/stat-card";
import { BarChart3, Clock, DollarSign, Users } from "lucide-react";
import { ProfileCard } from "../dashboard/components/card/profile-card";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          icon={<DollarSign size={24} />}
          bgColor="bg-green-500"
          textColor="text-white"
        />
        <StatCard
          title="Active Users"
          value="1,257"
          icon={<Users size={24} />}
          bgColor="bg-blue-500"
          textColor="text-white"
        />
        <StatCard
          title="New Clients"
          value="32"
          icon={<BarChart3 size={24} />}
          bgColor="bg-yellow-500"
          textColor="text-white"
        />
        <StatCard
          title="Avg. Response Time"
          value="1.5 hours"
          icon={<Clock size={24} />}
          bgColor="bg-purple-500"
          textColor="text-white"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            {/* Add a chart or activity feed here */}
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
        <div>
          <ProfileCard />
        </div>
      </div>
    </Layout>
  );
}
