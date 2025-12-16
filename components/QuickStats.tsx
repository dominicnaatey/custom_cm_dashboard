import React from 'react';
import { Users, Image as ImageIcon, MessageSquare, Rss } from 'lucide-react';

export const QuickStats: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h2>
      <div className="space-y-4">
        
        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Total Members</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Active Users</div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-bold text-gray-600 dark:text-gray-300">2.4k</div>
        </div>

        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Total Images</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Media Library</div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-bold text-gray-600 dark:text-gray-300">856</div>
        </div>

        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Comments</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Pending Approval</div>
            </div>
          </div>
          <div className="bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 px-2 py-1 rounded text-xs font-bold">12</div>
        </div>

        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-lg">
              <Rss className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Subscribers</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Newsletter</div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-bold text-gray-600 dark:text-gray-300">5k+</div>
        </div>

      </div>
    </div>
  );
};