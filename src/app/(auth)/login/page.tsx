// src/app/(auth)/login/page.tsx
'use client'
import { useRouter } from 'next/navigation'
import { Shield, User, Briefcase } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()

  // Function to simulate login by setting a cookie
  const handleLogin = (role: string) => {
    // This cookie allows the middleware to let us pass
    document.cookie = `user_role=${role}; path=/`
    
    if (role === 'user') router.push('/studio')
    if (role === 'admin') router.push('/admin/dashboard')
    if (role === 'employee') router.push('/ops/queue')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">NeuroLens Portal Entry</h1>
      <p className="mb-8 text-gray-500">Select a persona to test the portal architecture:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Card */}
        <button onClick={() => handleLogin('user')} className="p-8 bg-white shadow-lg rounded-xl hover:ring-2 ring-indigo-500 transition text-center">
          <User className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <h2 className="text-xl font-bold">End User</h2>
          <p className="text-sm text-gray-400 mt-2">Access the Studio</p>
        </button>

        {/* Employee Card */}
        <button onClick={() => handleLogin('employee')} className="p-8 bg-white shadow-lg rounded-xl hover:ring-2 ring-indigo-500 transition text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h2 className="text-xl font-bold">Employee</h2>
          <p className="text-sm text-gray-400 mt-2">Access Ops Queue</p>
        </button>

         {/* Admin Card */}
         <button onClick={() => handleLogin('admin')} className="p-8 bg-white shadow-lg rounded-xl hover:ring-2 ring-indigo-500 transition text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h2 className="text-xl font-bold">Admin</h2>
          <p className="text-sm text-gray-400 mt-2">Access Dashboard</p>
        </button>
      </div>
    </div>
  )
}