import React from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

export const TopCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total Posts Card */}
      <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[200px]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full mix-blend-overlay filter blur-2xl opacity-50 transform translate-x-10 -translate-y-10 pointer-events-none"></div>
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Total Posts</h3>
          <div className="text-3xl font-bold tracking-tight">
            1,248 <span className="text-sm font-normal text-gray-400">All Time</span>
          </div>
        </div>
        <div className="flex gap-4 mt-6 relative z-10">
          <div className="bg-gray-800/50 rounded-lg p-3 flex-1 backdrop-blur-sm border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Published</div>
            <div className="text-xl font-bold text-green-400">1,120</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3 flex-1 backdrop-blur-sm border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Drafts</div>
            <div className="text-xl font-bold text-yellow-400">128</div>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-[#C5A880] text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#b59870] transition-colors w-fit">
            Create New Post
          </button>
        </div>
      </div>

      {/* Upcoming Events Card */}
      <div className="bg-linear-to-br from-primary to-secondary rounded-2xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden min-h-[200px]">
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border-4 border-white/10 pointer-events-none"></div>
        <div className="absolute right-10 top-10 w-12 h-12 rounded-full bg-white/10 blur-md pointer-events-none"></div>
        
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <h3 className="text-primary-100 text-sm font-medium">Upcoming Events</h3>
            <div className="text-2xl font-bold mt-1">Tech Summit 2024</div>
            <p className="text-primary-100 text-sm mt-1">San Francisco, CA</p>
          </div>
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
            <Calendar className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="mt-auto relative z-10">
          <div className="flex items-center justify-between text-sm text-primary-100 mb-2">
            <span>Registrations</span>
            <span>85% Full</span>
          </div>
          <div className="w-full bg-black/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="text-xs opacity-75">Date</div>
              <div className="font-mono text-lg">DEC 15</div>
            </div>
            <div className="flex -space-x-2">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA93OdC0GQSBrWIvCbrN3W_6G-wTQIoeuvGzlEVg65eReAoNxctqDd12aQyqn6LA3wXQd0iQIapmMcxkYUZaGBqrJmAEoQO73IH8qW6Ozy_xVUYctYHCiFCfaqH1E88kUrg9vJ-8ojT7QabsvGwuejEopkNO5BE-0MYMCjSSsq6yWCOQntdhxTNEFOdQIBCsdCEUNPfk5-V_GSbcergG77IzqIc62V0BV57NmxwzFm0A58kq6mlfpS_mH71Gz_Dqz_HZ_PVmTXDMg" 
                alt="User 1" 
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-primary object-cover" 
              />
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCROhe-SLVlrjFH5MZkSr65JCioY4LmGCFe9anrPF-jezA7LW8A1kt8F3mpB4UeaQLTRw56aT3cc1KYFpoiV24q0ptjIDWVuufRfwo61H8sJSRoRgYMu3qBHbMma30-hAj97btPs-jV-rk2GGolv9cY_Lqwo3_NCRKzNtiekFOfCJ3pzvidqfpEBLZi4Xr_3sVvusVCZSTCiwbUFNbBbDk7Fvt7dXMqbvy9vJR2dFFLRjqdjlD70uEgFPqKlCWj5-26xWaYYKpwMQ" 
                alt="User 2" 
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-primary object-cover" 
              />
              <div className="w-8 h-8 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center text-xs font-bold shadow-sm">
                +42
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};