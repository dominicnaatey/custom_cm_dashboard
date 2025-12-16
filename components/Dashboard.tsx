'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { TopCards } from './TopCards';
// import { VisitorChart } from './VisitorChart';
import { RecentContent } from './RecentContent';
import { QuickStats } from './QuickStats';
import { ActivityFeed } from './ActivityFeed';

const VisitorChart = dynamic(() => import('./VisitorChart').then(mod => mod.VisitorChart), { 
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
});

export const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* Left Main Column */}
      <div className="flex-1 space-y-6">
        <TopCards />
        <VisitorChart />
        <RecentContent />
      </div>

      {/* Right Sidebar Column */}
      <div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">
        <QuickStats />
        <ActivityFeed />
      </div>
    </div>
  );
};