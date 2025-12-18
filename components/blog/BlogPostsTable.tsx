'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, Filter, ArrowUpDown, Edit, Trash, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlogPostsTable() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pb-8 bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-200"
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Posts
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage and publish your blog content.
          </p>
        </div>

        <Link href="/blog/create">
          <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg shadow-lg shadow-primary/30 flex items-center gap-2 transition-all active:scale-95">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Create Post</span>
          </button>
        </Link>
      </div>

      {/* Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-transparent dark:border-border-dark flex flex-col overflow-hidden">
        {/* Filters */}
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg inline-flex">
            {["All", "Published", "Draft", "Scheduled"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="text-gray-400 w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Filter by title..."
                className="block w-full sm:w-64 pl-9 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800">
              <ArrowUpDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800/50">
              <tr>
                <th className="px-6 py-4">
                  <input type="checkbox" className="h-4 w-4 rounded" />
                </th>
                {["Title", "Author", "Status", "Category", "Date"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      {h}
                    </th>
                  )
                )}
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {[
                {
                  title: "UX Design Principles for 2024",
                  author: "Jhon Abraham",
                  status: "Published",
                  category: "Design",
                  date: "Dec 25, 2023",
                  badge: "bg-green-100 text-green-800",
                },
                {
                  title: "Mastering Tailwind CSS",
                  author: "Luke Wright",
                  status: "Draft",
                  category: "Development",
                  date: "-",
                  badge: "bg-gray-100 text-gray-800",
                },
              ].map((row) => (
                <tr
                  key={row.title}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" className="h-4 w-4 rounded" />
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {row.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      /blog/{row.title.toLowerCase().replace(/\s+/g, "-")}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {row.author}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${row.badge}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {row.category}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {row.date}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-primary mx-1">
                      <Edit className="w-[18px] h-[18px]" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500 mx-1">
                      <Trash className="w-[18px] h-[18px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-100 dark:border-gray-800 px-5 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <strong>1</strong> to <strong>4</strong> of{" "}
            <strong>24</strong> results
          </p>

          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded-md text-sm ${
                  page === 1
                    ? "bg-primary text-white"
                    : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
