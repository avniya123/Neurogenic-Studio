import React from 'react'
import type { Metadata } from 'next'

export default function AdminDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Admin Control Tower</h1>
      
      {/* High Level Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <p className="text-3xl font-bold text-green-600">$12,450</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm">Active Users</h3>
            <p className="text-3xl font-bold">1,204</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm">API Costs (Gemini)</h3>
            <p className="text-3xl font-bold text-red-500">$450</p>
        </div>
      </div>

      {/* User Management Table [cite: 102] */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
            <h2 className="font-bold text-lg">Recent User Activity</h2>
        </div>
        <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm">
                <tr>
                    <th className="p-4">User Email</th>
                    <th className="p-4">Credits</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-t">
                    <td className="p-4">alex@example.com</td>
                    <td className="p-4 font-mono">24</td>
                    <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span></td>
                    <td className="p-4 text-indigo-600 cursor-pointer">Edit Balance</td>
                </tr>
                <tr className="border-t">
                    <td className="p-4">sarah@test.com</td>
                    <td className="p-4 font-mono text-red-500">0</td>
                    <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Low Balance</span></td>
                    <td className="p-4 text-indigo-600 cursor-pointer">Edit Balance</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
