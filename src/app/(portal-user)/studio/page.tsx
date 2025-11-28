// src/app/(portal-user)/studio/page.tsx
import { Upload, Image as ImageIcon, Sparkles } from 'lucide-react'

export default function StudioPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* LEFT COLUMN: Visuals (Preview & Upload) */}
      <div className="w-2/3 p-6 flex flex-col gap-6 overflow-y-auto">
        
        {/* Main Preview Area */}
        <div className="flex-1 bg-white rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-10 shadow-sm">
          <Upload className="w-12 h-12 text-gray-300 mb-4" />
          <p className="text-gray-500 font-medium">Click to upload Subject Image</p>
          <p className="text-xs text-gray-400">JPG or PNG (Max 5MB)</p>
        </div>

        {/* Reference Image Area */}
        <div className="h-48 bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center shadow-sm">
           <div className="flex flex-col items-center text-gray-400 hover:text-indigo-600 cursor-pointer">
              <ImageIcon className="w-8 h-8 mb-2" />
              <span className="text-sm">Upload Reference Image (Optional)</span>
           </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Controls & Settings */}
      <div className="w-1/3 bg-white border-l border-gray-200 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Sparkles className="text-indigo-600" /> 
          Photogenic AI Studio
        </h2>

        {/* Settings Form */}
        <div className="space-y-6">
            
            {/* Category */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject Type</label>
                <select className="w-full p-2 border rounded-lg bg-gray-50">
                    <option>Person</option>
                    <option>Animal</option>
                </select>
            </div>

            {/* Mood Pills (From Screenshot) */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mood</label>
                <div className="flex flex-wrap gap-2">
                    {['Elegant', 'Energetic', 'Peaceful', 'Dramatic'].map(mood => (
                        <button key={mood} className="px-3 py-1 rounded-full border hover:bg-indigo-50 hover:border-indigo-200 text-sm">
                            {mood}
                        </button>
                    ))}
                </div>
            </div>

            {/* Slider */}
            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Style Strength: 0.30</label>
                 <input type="range" min="0" max="1" step="0.1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>

            {/* THE CREDIT GATE BUTTON [cite: 53] */}
            <div className="pt-6 border-t">
                <button className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg">
                    Generate Image
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">Cost: 1 Credit</p>
            </div>
        </div>
      </div>
    </div>
  )
}