import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutGrid, 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Calendar, 
  Users, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isCollapsed, toggleCollapse }) => {
  const pathname = usePathname();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/' },
    { icon: FileText, label: 'Posts', href: '/blog' },
    { icon: ImageIcon, label: 'Media Gallery', href: '#' },
    { icon: Calendar, label: 'Upcoming Events', href: '#' },
    { icon: Users, label: 'Members & Users', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <aside className={`
      fixed md:static inset-y-0 left-0 z-30
      ${isCollapsed ? 'md:w-20' : 'md:w-64'} w-64
      shrink-0 flex flex-col 
      bg-surface-light dark:bg-surface-dark 
      border-r border-gray-200 dark:border-gray-700 
      transition-all duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className={`h-16 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-8'} border-b border-gray-100 dark:border-gray-800 transition-all duration-300`}>
        {!isCollapsed && (
          <div className="text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
            <LayoutGrid className="w-8 h-8" strokeWidth={2.5} />
            CMS
          </div>
        )}
        {isCollapsed && (
           <LayoutGrid className="w-8 h-8 text-primary" strokeWidth={2.5} />
        )}

        <button 
          onClick={toggleCollapse}
          className="hidden md:flex p-1.5 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>

        <button 
          onClick={onClose}
          className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              title={isCollapsed ? item.label : ''}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap
                ${isActive 
                  ? 'bg-primary/20 text-primary dark:text-white dark:bg-primary' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary dark:hover:text-primary-light'
                }
                ${isCollapsed ? 'justify-center px-2' : ''}
              `}
            >
              <item.icon className="w-5 h-5 shrink-0" fill={isActive ? "currentColor" : "none"} />
              <span className={`font-medium transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0 w-0' : 'block opacity-100'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <a 
          href="#" 
          title={isCollapsed ? 'Log Out' : ''}
          className={`
            flex items-center gap-3 px-4 py-3 
            text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 
            transition-colors rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 whitespace-nowrap
            ${isCollapsed ? 'justify-center px-2' : ''}
          `}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span className={`font-medium transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0 w-0' : 'block opacity-100'}`}>
            Log Out
          </span>
        </a>
      </div>
    </aside>
  );
};
