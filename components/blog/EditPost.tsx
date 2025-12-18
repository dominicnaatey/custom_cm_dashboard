'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Eye, 
  Bold, 
  Italic, 
  Underline, 
  Link, 
  Image as ImageIcon, 
  Quote, 
  ChevronDown, 
  X 
} from 'lucide-react';

interface Tag {
  id: string;
  label: string;
}

const EditorButton = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <button 
    type="button"
    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
    title={title}
  >
    {icon}
  </button>
);

export function EditPost() {
  const [title, setTitle] = useState("Top 10 Trends in Web Design for 2024");
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', label: 'Technology' },
    { id: '2', label: 'Design' }
  ]);
  const [tagInput, setTagInput] = useState("");

  const editorImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBTB-_GeM5EQgE6aSdQl1qfjYt8DWqNg7xT5GVngL-kWI3eWBaK3b4zctqbQxaNOlviX7vUUxzYb7zERrUqa_8xPOyIZvxhoH0mkclPIFpRhTNS8cz5znPl9xOinxEaO50c8thYWApZrbmoZp5wKxQHsvJdLXtvCW7iX5B9Hh4yL9TBWvNXiXluGxoo6PDZPhd5b9lq0zYRE1KlBXFqBCAYIXiQWuoejMYBAlZwwiTUjLjr_TtClg0IExI4_cyse_AH1lff85E88g";

  const removeTag = (id: string) => {
    setTags(tags.filter(t => t.id !== id));
  };

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault(); // Prevent form submission if inside a form
      setTags([...tags, { id: Date.now().toString(), label: tagInput.trim() }]);
      setTagInput("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full text-gray-900 dark:text-white"
    >
      <div className="w-full pb-20">
        
        {/* Breadcrumbs & Heading */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="hover:text-primary cursor-pointer transition-colors">Dashboard</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="hover:text-primary cursor-pointer transition-colors">Posts</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 dark:text-white font-medium">Edit Post</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h1>
              <p className="text-sm text-gray-500">
                Last saved: Today at 10:43 AM 
                <span className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded text-xs ml-2 font-medium">Autosaved</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                <Eye className="w-4.5 h-4.5" />
                Preview
              </button>
              <button className="h-10 px-6 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-hover shadow-sm shadow-blue-200 dark:shadow-none transition-colors flex items-center gap-2">
                <span>Update Post</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col xl:flex-row gap-6">
          
          {/* Left Column (Editor) */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            
            {/* Main Editor Card */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-lg font-medium rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow text-gray-900 dark:text-white placeholder:text-gray-400"
                  placeholder="e.g. Summer Collection Launch"
                />
              </div>
              
              <div className="flex flex-col h-[500px]">
                {/* Toolbar */}
                <div className="flex items-center gap-1 p-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex-wrap">
                  <EditorButton icon={<Bold className="w-5 h-5" />} title="Bold" />
                  <EditorButton icon={<Italic className="w-5 h-5" />} title="Italic" />
                  <EditorButton icon={<Underline className="w-5 h-5" />} title="Underline" />
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                  <EditorButton icon={<Link className="w-5 h-5" />} title="Link" />
                  <EditorButton icon={<ImageIcon className="w-5 h-5" />} title="Image" />
                  <EditorButton icon={<Quote className="w-5 h-5" />} title="Quote" />
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                  <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors text-sm font-medium">
                    Paragraph <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Text Area Mockup */}
                <div className="flex-1 p-5 bg-white dark:bg-surface-dark overflow-y-auto">
                  <p className="mb-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Web design is constantly evolving, driven by technological advancements and changing user preferences. As we move further into 2024, several key trends are emerging that will shape the digital landscape.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. AI-Driven Personalization</h3>
                  <p className="mb-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Artificial intelligence is no longer just a buzzword; it&apos;s becoming a fundamental part of web design workflows. From generating layout ideas to personalizing content in real-time for visitors...
                  </p>
                  
                  <div className="my-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative group cursor-pointer">
                    <div 
                      className="bg-cover bg-center h-48 w-full opacity-80"
                      style={{ backgroundImage: `url('${editorImage}')` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <button className="bg-white text-gray-900 px-3 py-1 rounded shadow text-sm font-medium">Edit Image</button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Bento Grids</h3>
                  <p className="mb-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Inspired by Apple&apos;s promotional materials and dashboard interfaces, bento grids are a modular way to organize content...
                  </p>
                </div>
              </div>
            </div>
            
            {/* Search Engine Listing */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-gray-900 dark:text-white">Search Engine Listing Preview</h2>
                <a href="#" className="text-primary text-sm font-medium hover:underline">Edit SEO</a>
              </div>
              <div className="p-4 bg-background-light dark:bg-[#101922] rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 mb-1">https://myshop.com/blogs/news/web-design-trends-2024</p>
                <h3 className="text-lg text-[#1a0dab] dark:text-[#8ab4f8] font-medium hover:underline cursor-pointer truncate">
                  {title} - MyShop Blog
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                  Discover the latest web design trends for 2024 including AI personalization, bento grids, and immersive 3D experiences. Read more on our blog.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column (Sidebar) */}
          <div className="w-full xl:w-80 shrink-0 flex flex-col gap-6">
            
            {/* Visibility Card */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Visibility</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Status</label>
                  <div className="relative">
                    <select className="w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-primary focus:border-primary h-9 px-3">
                      <option>Published</option>
                      <option>Draft</option>
                      <option>Archived</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Publish Date</label>
                  <input type="date" className="w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-primary focus:border-primary h-9 px-3" />
                  <p className="text-xs text-gray-500 mt-2">Post is currently visible to customers.</p>
                </div>
              </div>
            </div>
            
            {/* Organization Card */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Organization</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Author</label>
                  <select className="w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-primary focus:border-primary h-9 px-3">
                    <option>Jane Doe</option>
                    <option>Alex Morgan</option>
                    <option>John Smith</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Category</label>
                  <select className="w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-primary focus:border-primary h-9 px-3">
                    <option>Design & UI</option>
                    <option>Development</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Tags</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map(tag => (
                      <span key={tag.id} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                        {tag.label}
                        <button onClick={() => removeTag(tag.id)} className="hover:text-red-500">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <input 
                    type="text" 
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={addTag}
                    placeholder="Add a tag..."
                    className="w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-primary focus:border-primary h-9 px-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
