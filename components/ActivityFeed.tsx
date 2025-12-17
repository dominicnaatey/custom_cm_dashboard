import React from 'react';
import Image from 'next/image';
import { Activity } from '../types';

const activities: Activity[] = [
  {
    id: '1',
    user: { name: 'Jhon Abraham', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB82RJV4ull4HozopLQ4eqXygWajS3a1rbGGppaZviudlGGCHw8qpMB5UFpDm_YAgfmFJo5-zYlrpPUuS60PsDaFk9dpH_Yhz4U7zOBNKk0qJl8aitMBi721cIRWw-NwT53qyjoBa1s_ZtMaT4JJ7TJsk-6m2BMOpePWB6jxxrK-QooFo-sEE_KlWxvjRT2L-vFw5AhOJOdZn1z_JVahMmkpdigb9Q4ZiYrppETHaJS6H3-tNwe30LzBgFRndM7psxtCkEoJNbNJw' },
    action: 'Published a new post',
    target: '"Web 3.0"',
    time: '2m',
    isNew: false
  },
  {
    id: '2',
    user: { name: 'Luke Wright', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnhIHr7ses780zIRkLE3dwykytONBgWb65QU_5-I_VtO5gjlOZfO_Vw39M-S_0eeKL7goxefwHjXFdLFvaEU9mwB15Fgbfr8zax4kN9XqIhcHqNKjBP7w9Cy9M1aIbCVVrRh0_hstm9TuBJSWOPd6ZN1u2xbBhJXed_zTIie-mYi-kxXypN0sD5fHX26TAHRtiXUYSkJvJGBW0umuwCLNxP0YHNaz_5dTvqjn6AoGdfmkmqWCa2HVV97katVW0PGV0BW-hu9YsGQ' },
    action: 'Updated gallery',
    target: '"Summer Trip"',
    time: 'New',
    isNew: true
  },
  {
    id: '3',
    user: { name: 'Jhony Birstow', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASXkonj-GAi6Xp0jzV2d-cuPxOc4vzel0rKPszZng3SA9yXFQI-owHl7KHSMm8ByeELjiIMZIXk4quiDT5Bsv2C7oa8FlFe0sjDBdkVQg8WN1AlOnvsp7SQw-3pHYOA9MZCO1eEY1MmekTkMXQYVQAtcIgqACCKDo87vVEQC4nNIgKmBpGrwwVB3jrZYYHXd4niTpxAzhtRchTYR3S2htdFhUgrQXEe1HYDA4x0s0ZLUXEtMH-OdyhSCgcw0lU7xB8qIEzmFV5iA' },
    action: 'Registered as a new member',
    time: '1h',
    isNew: false
  },
  {
    id: '4',
    user: { name: 'Jhon Cina', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzeJn3QydHyFYPFwX8EHo6W-B_ShFDbVHC02SB89OymS_3bjV41UxreVR3KO9wD0QmUibQ41OP5nrwPVPX2LIKTZKO6Iu0_oIkkqO07kRtptjPyx31SC2tGWDXDUbdKRASAvutsHmjDN6cF1y2BnY5VQICM4fsLOiSb-_L6ItJdWHvocxokriZUaV961BsOAtIIIytXW34XBhXse80Cx_NM2PyNCmGikpxPZDhO29BbOURiuNSmEvouqqZxZGhLY7VG2c2H_9PEQ' },
    action: 'Commented on',
    target: '"React Hooks"',
    time: '3h',
    isNew: false
  },
  {
    id: '5',
    user: { name: 'Randy Ortin', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2WyuO27SgJ9OcDRsraRWuF-8Ngo5_eL3KOxoocw3RX2Ke8ogTPEriI996GApzGSahxAeJB2H_YJvIf4NGLWsB3Y6xmTReRTaMb87W5t01m_kHDWXDrzLRHtRYSh2Ra_GvMbBvL6iBu_OUIptLCTPCHNdtE_oA5nytrBI8KdTTiwrWXK6XRJ1jijA_xC9HQCpwRUJHASHh6leciv2UiPabkKG3bFRF66dfj0VWlM681kYU4WEVj_9I-onhf8ZmqrL4PHXLSyYOUQ' },
    action: 'Deleted a draft post',
    time: '5h',
    isNew: false
  }
];

export const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity Feed</h2>
        <a href="#" className="text-sm font-medium text-primary hover:text-secondary transition-colors">See All</a>
      </div>
      
      <div className="space-y-6">
        {activities.map((item) => (
          <div key={item.id} className={`flex items-start gap-4 ${item.isNew ? 'p-2 -mx-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg' : ''}`}>
            <Image 
              src={item.user.avatar} 
              alt="User" 
              width={40}
              height={40}
              className="rounded-full border border-gray-100 dark:border-gray-700 object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{item.user.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.action} {item.target && <span>{item.target}</span>}
              </p>
            </div>
            <div className={`text-xs font-medium ${item.isNew ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};