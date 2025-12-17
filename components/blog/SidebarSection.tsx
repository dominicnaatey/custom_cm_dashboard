import React, { useState, KeyboardEvent } from 'react';
import { ImagePlus, X } from 'lucide-react';

const SidebarSection: React.FC = () => {
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');
  const [tags, setTags] = useState<string[]>(['Design']);
  const [tagInput, setTagInput] = useState('');

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    } else if (e.key === 'Backspace' && !tagInput && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="w-full xl:w-80 shrink-0 flex flex-col gap-6">
      {/* Visibility Status Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="text-gray-900 dark:text-white text-sm font-bold mb-4">Visibility</h3>
        <div className="flex flex-col gap-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input 
              type="radio" 
              name="visibility" 
              className="mt-0.5 text-primary focus:ring-primary/20 border-gray-300"
              checked={visibility === 'visible'}
              onChange={() => setVisibility('visible')}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">Visible</span>
              <span className="text-xs text-gray-500">Post is live immediately</span>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input 
              type="radio" 
              name="visibility" 
              className="mt-0.5 text-primary focus:ring-primary/20 border-gray-300"
              checked={visibility === 'hidden'}
              onChange={() => setVisibility('hidden')}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">Hidden</span>
              <span className="text-xs text-gray-500">Post is hidden and saved as draft</span>
            </div>
          </label>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Schedule publish</label>
          <div className="relative">
            <input 
              type="datetime-local" 
              className="w-full rounded-lg text-sm text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 h-9 px-3 disabled:opacity-50"
              disabled={visibility !== 'visible'}
            />
            {visibility !== 'visible' && (
              <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-900/50 cursor-not-allowed z-10 rounded-lg"></div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1.5">Select &apos;Visible&apos; to enable scheduling.</p>
        </div>
      </div>

      {/* Featured Image Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900 dark:text-white text-sm font-bold">Featured media</h3>
          <button className="text-primary text-xs font-medium hover:underline">Select from library</button>
        </div>
        <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
          <div className="size-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3 group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors shadow-sm">
            <ImagePlus className="text-gray-500 dark:text-gray-300 w-6 h-6" />
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">Add new file</p>
          <p className="text-xs text-gray-500 mt-1">or drop files to upload</p>
        </div>
      </div>

      {/* Organization Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 flex flex-col gap-4">
        <h3 className="text-gray-900 dark:text-white text-sm font-bold mb-1">Organization</h3>
        
        <label className="block">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Author</span>
          <div className="relative">
            <select className="w-full rounded-lg text-sm text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 h-9 pl-3 pr-8 appearance-none transition-all cursor-pointer">
              <option>Jane Doe</option>
              <option>John Smith</option>
              <option>Admin User</option>
            </select>
          </div>
        </label>
        
        <label className="block">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Category</span>
          <div className="relative">
            <select className="w-full rounded-lg text-sm text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 h-9 pl-3 pr-8 appearance-none transition-all cursor-pointer">
              <option>News</option>
              <option>Tutorials</option>
              <option>Product Updates</option>
            </select>
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Tags</span>
          <div className="flex flex-wrap gap-2 p-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 min-h-[42px] focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs font-medium text-gray-900 dark:text-white">
                {tag}
                <button 
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-red-500 rounded-full p-0.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <input 
              className="flex-1 min-w-[60px] border-none p-0 h-5 text-sm focus:ring-0 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none" 
              placeholder="Add..." 
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1.5">Separate tags with commas</p>
        </label>
      </div>
    </div>
  );
};

export default SidebarSection;
