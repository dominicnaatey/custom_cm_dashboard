import Image from 'next/image';
import { Search, Bell, Moon, Sun, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 shrink-0 transition-colors duration-200">
      <button 
        onClick={toggleSidebar}
        className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="hidden md:flex items-center max-w-md w-full ml-4">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </span>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border-none rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm transition-shadow"
            placeholder="Search content, users, or media..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto md:ml-0">
        <button className="p-2 text-gray-400 hover:text-primary dark:hover:text-white transition-colors relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
        </button>
        
        <button 
          onClick={toggleDarkMode}
          className="p-2 text-gray-400 hover:text-primary dark:hover:text-white transition-colors overflow-hidden relative w-10 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -90, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold text-gray-900 dark:text-white">Alex Morgan</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Administrator</div>
          </div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQA_SfK4Zw-L06-vOvWwC32D9q8yB6P9WDlc-OOSWpemmJYUiduKvbuICmRgi8_2-AF_-38qP0QLSVXWQhHgpIH0bjoy24BYETvUN2yVMQ-gGI5bFyqWEqt0jMycHQOHK8NgUKrL5biCiE9Wlk4Ut0FArFUcGmK0AXvez6H0kBdGoFQQUs-Vx1SwmitxJvg8uHP2PW6pB4Qbd_PGnSclpK-VajoBGrULEzR_8kekalHrpMXr5mqcShp3c1NRoJAaKZAiMJDAvtEA"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border-2 border-white dark:border-gray-700 object-cover shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};
