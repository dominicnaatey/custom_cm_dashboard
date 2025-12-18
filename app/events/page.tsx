
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Share, 
  Plus, 
  Search, 
  ChevronDown, 
  List, 
  LayoutGrid, 
  CalendarX 
} from 'lucide-react';
import EventCard from '@/components/events/EventCard';
import { MOCK_EVENTS } from '@/components/events/data';
import { EventStatus } from '@/components/events/types';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<EventStatus | 'All'>('All');

  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || event.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="flex h-full w-full bg-background-light dark:bg-background-dark overflow-hidden">
      
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <div className="shrink-0 px-8 py-6 z-10">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2">
              <Link className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="/">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white text-sm font-semibold">Events</span>
            </div>
            
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-end gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold tracking-tight">Events</h2>
                <p className="text-gray-500 dark:text-gray-400 text-base">Manage your upcoming and past events.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all">
                  <Share className="w-5 h-5" />
                  Export
                </button>
                <button className="flex items-center justify-center gap-2 h-10 px-4 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary-dark active:scale-95 transition-all">
                  <Plus className="w-5 h-5" />
                  Create event
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-6">
            
            {/* Toolbar */}
            <div className="bg-white dark:bg-surface-dark p-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between sticky top-0 z-20">
              <div className="relative w-full md:w-80 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary sm:text-sm transition-shadow h-10"
                  placeholder="Search events..."
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                <div className="relative">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as EventStatus | 'All')}
                    className="flex h-8 appearance-none items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:ring-primary text-gray-900 dark:text-white text-sm font-medium px-3 pr-8 transition-all cursor-pointer outline-none"
                  >
                    <option value="All">Status: All</option>
                    <option value={EventStatus.Active}>Status: Active</option>
                    <option value={EventStatus.Draft}>Status: Draft</option>
                    <option value={EventStatus.Scheduled}>Status: Scheduled</option>
                    <option value={EventStatus.Past}>Status: Past</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <button className="flex h-8 shrink-0 items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 px-3 transition-all text-gray-900 dark:text-white">
                  <span className="text-sm font-medium">Date: Newest</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                <button className="flex h-8 shrink-0 items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 px-3 transition-all text-gray-900 dark:text-white">
                  <span className="text-sm font-medium">Type: Webinar</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

              <div className="flex bg-gray-50 dark:bg-gray-800 p-1 rounded-lg shrink-0">
                <button className="p-1.5 rounded bg-white dark:bg-surface-dark shadow-sm text-primary">
                  <List className="w-5 h-5 block" />
                </button>
                <button className="p-1.5 rounded text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <LayoutGrid className="w-5 h-5 block" />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))
              ) : (
                <div className="bg-white dark:bg-surface-dark rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 text-center">
                  <CalendarX className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 font-medium">No events found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-6 pb-8 gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">{filteredEvents.length}</span> of <span className="font-semibold text-gray-900 dark:text-white">{MOCK_EVENTS.length}</span> results
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all" disabled>
                  Previous
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-gray-900 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 transition-all">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
