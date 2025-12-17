'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import EditorSection from './EditorSection';
import SidebarSection from './SidebarSection';

export function CreateBlogPost() {
  return (
    <div className="grow w-full max-w-[1200px] mx-auto p-4 md:p-6 lg:p-8 bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-sans min-h-screen">
      {/* Page Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Link href="/blog">
            <button className="flex items-center justify-center size-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-black leading-tight tracking-tight">
            Create post
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-gray-500 mr-2 hidden sm:block">
            Unsaved changes
          </span>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm text-gray-900 dark:text-white">
            Save Draft
          </button>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-sm transition-colors">
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EditorSection />
        <SidebarSection />
      </div>
    </div>
  );
}
