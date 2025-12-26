import React from 'react';
import { Settings, Calendar, MapPin, Plus, X } from 'lucide-react';
import { EventFormData, EventStatus, Visibility, EventType } from '@/components/events/types';

interface EventSidebarProps {
  formData: EventFormData;
  setFormData: React.Dispatch<React.SetStateAction<EventFormData>>;
}

export const EventSidebar: React.FC<EventSidebarProps> = ({ formData, setFormData }) => {
  return (
    <div className="w-full xl:w-80 shrink-0 space-y-6">
      {/* Status & Visibility */}
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Status & Visibility
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Event Type</label>
            <select 
              value={formData.type}
              onChange={e => setFormData(prev => ({...prev, type: e.target.value as EventType}))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option value={EventType.Webinar}>Webinar</option>
              <option value={EventType.Workshop}>Workshop</option>
              <option value={EventType.Networking}>Networking</option>
              <option value={EventType.Meetup}>Meetup</option>
              <option value={EventType.Reveal}>Product Reveal</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Initial Status</label>
            <select 
              value={formData.status}
              onChange={e => setFormData(prev => ({...prev, status: e.target.value as EventStatus}))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option value={EventStatus.Draft}>Draft</option>
              <option value={EventStatus.Scheduled}>Scheduled</option>
              <option value={EventStatus.Active}>Live Now</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Visibility</label>
            <select 
              value={formData.visibility}
              onChange={e => setFormData(prev => ({...prev, visibility: e.target.value as Visibility}))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option value={Visibility.Public}>Public</option>
              <option value={Visibility.Internal}>Internal (Team Only)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Date & Time */}
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Date & Time
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Date</label>
            <input 
              type="date"
              required
              value={formData.date}
              onChange={e => setFormData(prev => ({...prev, date: e.target.value}))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Start Time</label>
            <input 
              type="time"
              required
              value={formData.time}
              onChange={e => setFormData(prev => ({...prev, time: e.target.value}))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Location
        </h3>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Venue or Link</label>
            <textarea 
              rows={2}
              required
              value={formData.location}
              onChange={e => setFormData(prev => ({...prev, location: e.target.value}))}
              placeholder="San Francisco, CA or Online Meeting Link"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {formData.location && !formData.location.toLowerCase().includes('http') && (
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-40 bg-gray-50 dark:bg-gray-800">
               <iframe 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 scrolling="no" 
                 marginHeight={0} 
                 marginWidth={0} 
                 src={`https://maps.google.com/maps?q=${encodeURIComponent(formData.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                 title="Location Map"
                 className="opacity-90 hover:opacity-100 transition-opacity"
               >
               </iframe>
            </div>
          )}
          
          {formData.location && (
             <a 
               href={formData.location.toLowerCase().includes('http') ? formData.location : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.location)}`}
               target="_blank"
               rel="noopener noreferrer"
               className="text-xs text-primary hover:text-primary-dark font-medium flex items-center gap-1 mt-2"
             >
               <MapPin className="w-3 h-3" />
               {formData.location.toLowerCase().includes('http') ? 'Open Link' : 'Open in Google Maps'}
             </a>
          )}
        </div>
      </div>
    </div>
  );
};
