// src/app/(portal-employee)/ops/queue/page.tsx
export default function EmployeeQueue() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Operations Queue</h1>

      {/* Job List */}
      <div className="space-y-4">
        {/* Ticket Item */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Job ID: #8834</p>
                <h3 className="font-bold text-lg">Failed Generation (nsfw_filter)</h3>
                <p className="text-sm text-gray-600">User: alex@example.com</p>
            </div>
            <div className="flex gap-3">
                <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">View Prompt</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">Flag User</button>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Job ID: #8835</p>
                <h3 className="font-bold text-lg">API Timeout Error</h3>
                <p className="text-sm text-gray-600">User: john@test.com</p>
            </div>
            <div className="flex gap-3">
                <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">Retry Job</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Refund Credit</button>
            </div>
        </div>
      </div>
    </div>
  )
}