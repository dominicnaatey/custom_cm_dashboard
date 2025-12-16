import React from 'react';
import { 
  LayoutGrid, 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Calendar, 
  Users, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: FileText, label: 'Blog Posts', active: false },
    { icon: ImageIcon, label: 'Media Gallery', active: false },
    { icon: Calendar, label: 'Upcoming Events', active: false },
    { icon: Users, label: 'Members & Users', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside className={`
      fixed md:static inset-y-0 left-0 z-30
      w-64 flex-shrink-0 flex flex-col 
      bg-surface-light dark:bg-surface-dark 
      border-r border-gray-200 dark:border-gray-700 
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="h-16 flex items-center px-8 border-b border-gray-100 dark:border-gray-800">
        <div className="text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
          <LayoutGrid className="w-8 h-8" strokeWidth={2.5} />
          CMS
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all
              ${item.active 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary dark:hover:text-primary-light'
              }
            `}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <a 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </a>
      </div>
    </aside>
  );
};