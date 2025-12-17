'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Bold, 
  Italic, 
  Underline, 
  Heading, 
  Quote, 
  List, 
  ListOrdered, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  RemoveFormatting, 
  ImagePlus
} from 'lucide-react';

export function CreateBlogPost() {
  return (
    <div className="grow w-full max-w-[1200px] mx-auto p-4 md:p-6 lg:p-8 bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-sans min-h-screen">
      {/* Page Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Link href="/blog">
            <button className="flex items-center justify-center size-8 rounded-lg border border-[#dbe0e6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#617589] transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <h1 className="text-[#111418] dark:text-white text-2xl md:text-3xl font-black leading-tight tracking-tight">
            Create blog post
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#617589] mr-2 hidden sm:block">
            Unsaved changes
          </span>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white dark:bg-gray-800 border border-[#dbe0e6] dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
            Save Draft
          </button>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-sm transition-colors">
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Editor */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow border border-[#dbe0e6] dark:border-gray-700 overflow-hidden">
            <div className="p-6 pb-2">
              <label className="block mb-2">
                <p className="text-sm font-semibold pb-1">Title</p>
                <input
                  className="w-full rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 h-11 px-3 text-base placeholder:text-[#617589] focus:outline-0 focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g. Summer Fashion Trends"
                />
              </label>
            </div>

            {/* Toolbar */}
            <div className="px-4 py-2 border-y border-[#f0f2f4] dark:border-gray-700 flex items-center gap-1 bg-[#fcfdfd] dark:bg-surface-dark">
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <Bold className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <Italic className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <Underline className="w-5 h-5" />
              </button>

              <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1" />

              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <Heading className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <Quote className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <List className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <ListOrdered className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <LinkIcon className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589] transition-colors">
                <ImageIcon className="w-5 h-5" />
              </button>

              <button className="ml-auto p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#617589]">
                <RemoveFormatting className="w-5 h-5" />
              </button>
            </div>

            {/* Editor Area */}
            <div className="p-6 min-h-[400px]">
              <textarea
                className="w-full min-h-[400px] border-none focus:ring-0 p-0 bg-transparent resize-y text-base leading-relaxed"
                placeholder="Start writing your post here..."
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow border border-[#dbe0e6] dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold">Excerpt</h3>
              <button className="text-primary text-sm font-medium hover:underline">
                Edit SEO listing
              </button>
            </div>
            <p className="text-[#617589] text-sm mb-3">
              Add a summary of the post to appear on your home page or blog.
            </p>
            <textarea
              className="w-full rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 p-3 text-sm min-h-[100px] resize-none focus:ring-2 focus:ring-primary/20"
              placeholder="Write a brief summary..."
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Visibility */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow border border-[#dbe0e6] dark:border-gray-700 p-5">
            <h3 className="text-sm font-bold mb-4">Visibility</h3>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="radio" name="visibility" className="mt-1 text-primary" />
              <div>
                <span className="text-sm font-medium">Visible</span>
                <p className="text-xs text-[#617589]">
                  Post is live immediately
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer mt-3">
              <input
                type="radio"
                name="visibility"
                defaultChecked
                className="mt-1 text-primary"
              />
              <div>
                <span className="text-sm font-medium">Hidden</span>
                <p className="text-xs text-[#617589]">
                  Post is hidden and saved as draft
                </p>
              </div>
            </label>
          </div>

          {/* Featured Media */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow border border-[#dbe0e6] dark:border-gray-700 p-5">
            <h3 className="text-sm font-bold mb-3">Featured media</h3>
            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
              <ImagePlus className="w-7 h-7 mx-auto text-[#617589]" />
              <p className="text-sm font-medium mt-2">Add new file</p>
              <p className="text-xs text-[#617589]">
                or drop files to upload
              </p>
            </div>
          </div>

          {/* Organization */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow border border-[#dbe0e6] dark:border-gray-700 p-5">
            <h3 className="text-sm font-bold mb-4">Organization</h3>

            <label className="block mb-4">
              <span className="text-xs font-semibold text-[#617589] uppercase">
                Author
              </span>
              <select className="w-full mt-1 rounded-lg h-9 px-3 bg-white dark:bg-gray-800 border border-[#dbe0e6] dark:border-gray-600 text-sm">
                <option>Jane Doe</option>
                <option>John Smith</option>
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-[#617589] uppercase">
                Category
              </span>
              <select className="w-full mt-1 rounded-lg h-9 px-3 bg-white dark:bg-gray-800 border border-[#dbe0e6] dark:border-gray-600 text-sm">
                <option value="">Select a category</option>
                <option>News</option>
                <option>Tutorials</option>
                <option>Product Updates</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
