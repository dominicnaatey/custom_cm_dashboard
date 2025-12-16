'use client';

import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { day: 'Mon', visitors: 65, active: true },
  { day: 'Tue', visitors: 40, active: false },
  { day: 'Wed', visitors: 80, active: true },
  { day: 'Thu', visitors: 55, active: false },
  { day: 'Fri', visitors: 95, active: true },
  { day: 'Sat', visitors: 70, active: false },
  { day: 'Sun', visitors: 45, active: true },
];

export const VisitorChart: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Visitor Analytics</h2>
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <button className="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white transition-all">Day</button>
          <button className="px-3 py-1 text-xs font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all">Week</button>
          <button className="px-3 py-1 text-xs font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all">Year</button>
        </div>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
             <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  backgroundColor: '#1e293b',
                  color: '#fff'
                }}
             />
             <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              dy={10}
            />
            <Bar dataKey="visitors" radius={[4, 4, 0, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.active ? '#256058' : 'rgba(37, 96, 88, 0.3)'}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};