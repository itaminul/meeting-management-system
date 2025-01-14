import React from "react";

export function ProfileCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-indigo-600 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="opacity-75">Software Developer</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Email:</span> john.doe@example.com
          </p>
          <p>
            <span className="font-semibold">Location:</span> New York, USA
          </p>
          <p>
            <span className="font-semibold">Joined:</span> January 2023
          </p>
        </div>
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
