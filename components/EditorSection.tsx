import React from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Heading, 
  Quote, 
  List, 
  ListOrdered, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  RemoveFormatting 
} from 'lucide-react';

const ToolbarButton: React.FC<{ icon: React.ReactNode; title: string; isActive?: boolean }> = ({ icon, title, isActive }) => (
  <button 
    className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${isActive ? 'text-primary bg-blue-50 dark:bg-blue-900/20' : 'text-gray-500 dark:text-gray-400'}`}
    title={title}
    type="button"
  >
    {icon}
  </button>
);

const EditorSection: React.FC = () => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-6">
      {/* Main Editor Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 pb-2">
          <label className="block mb-2">
            <p className="text-gray-900 dark:text-white text-sm font-semibold leading-normal pb-1">Title</p>
            <input 
              className="w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 h-11 px-3 text-base font-normal placeholder:text-gray-500 transition-all" 
              placeholder="e.g. Summer Fashion Trends" 
            />
          </label>
        </div>

        {/* WYSIWYG Toolbar */}
        <div className="px-4 py-2 border-y border-gray-100 dark:border-gray-700 flex items-center gap-1 bg-gray-50 dark:bg-gray-800/50 flex-wrap">
          <ToolbarButton icon={<Bold className="w-5 h-5" />} title="Bold" />
          <ToolbarButton icon={<Italic className="w-5 h-5" />} title="Italic" />
          <ToolbarButton icon={<Underline className="w-5 h-5" />} title="Underline" />
          
          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1"></div>
          
          <ToolbarButton icon={<Heading className="w-5 h-5" />} title="H1" />
          <ToolbarButton icon={<Quote className="w-5 h-5" />} title="Quote" />
          
          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1"></div>
          
          <ToolbarButton icon={<List className="w-5 h-5" />} title="Bullet List" />
          <ToolbarButton icon={<ListOrdered className="w-5 h-5" />} title="Numbered List" />
          
          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1"></div>
          
          <ToolbarButton icon={<LinkIcon className="w-5 h-5" />} title="Insert Link" />
          <ToolbarButton icon={<ImageIcon className="w-5 h-5" />} title="Insert Image" />
          
          <div className="ml-auto">
            <ToolbarButton icon={<RemoveFormatting className="w-5 h-5" />} title="Clear Formatting" />
          </div>
        </div>

        {/* Editor Text Area */}
        <div className="p-6 min-h-[400px]">
          <textarea 
            className="w-full h-full min-h-[400px] border-none focus:ring-0 p-0 text-base text-gray-900 dark:text-gray-200 bg-transparent resize-y font-normal leading-relaxed placeholder:text-gray-400 focus:outline-none" 
            placeholder="Start writing your post here..."
          ></textarea>
        </div>
      </div>

      {/* Excerpt Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900 dark:text-white text-base font-bold">Excerpt</h3>
          <button className="text-primary text-sm font-medium hover:underline">Edit SEO listing</button>
        </div>
        <p className="text-gray-500 text-sm mb-3">Add a summary of the post to appear on your home page or blog.</p>
        <textarea 
          className="w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 text-sm font-normal min-h-[100px] resize-none transition-all" 
          placeholder="Write a brief summary..."
        ></textarea>
      </div>
    </div>
  );
};

export default EditorSection;
