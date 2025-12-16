import React from 'react';
import { Filter } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Design Systems 101',
    author: 'Sarah Jenkins',
    date: 'Dec 25, 2023',
    status: 'Published',
    views: '12.5k'
  },
  {
    id: '2',
    title: '2024 Tech Trends',
    author: 'Mike Ross',
    date: 'Dec 24, 2023',
    status: 'Draft',
    views: '-'
  },
  {
    id: '3',
    title: 'Tailwind CSS Tips',
    author: 'Adam W.',
    date: 'Dec 22, 2023',
    status: 'Published',
    views: '8.2k'
  }
];

export const RecentContent: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Content</h2>
        <div className="relative">
          <input
            type="text"
            className="pl-8 pr-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-primary focus:border-primary focus:outline-none"
            placeholder="Filter..."
          />
          <Filter className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 font-medium">
            <tr>
              <th className="px-4 py-3 rounded-l-lg">Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right rounded-r-lg">Views</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {posts.map((post) => (
              <tr key={post.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">{post.title}</td>
                <td className="px-4 py-4 text-gray-500 dark:text-gray-400">{post.author}</td>
                <td className="px-4 py-4 text-gray-500 dark:text-gray-400">{post.date}</td>
                <td className="px-4 py-4">
                  <span className={`
                    px-2 py-1 rounded-md text-xs font-semibold
                    ${post.status === 'Published' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'}
                  `}>
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right text-gray-900 dark:text-white font-medium">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};