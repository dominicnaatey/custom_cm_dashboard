
import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Ticket, Edit, Trash2, MoreVertical } from 'lucide-react';
import { Event, EventStatus } from './types';

interface EventCardProps {
  event: Event;
}

const getStatusStyles = (status: EventStatus) => {
  switch (status) {
    case EventStatus.Active:
      return 'bg-green-50 text-green-700 border-green-200 ring-green-500';
    case EventStatus.Draft:
      return 'bg-gray-100 text-gray-600 border-gray-200 ring-gray-400';
    case EventStatus.Scheduled:
      return 'bg-orange-50 text-orange-700 border-orange-200 ring-orange-500';
    case EventStatus.Past:
      return 'bg-gray-100 text-gray-500 border-gray-200 ring-gray-400 opacity-60';
    default:
      return 'bg-gray-50 text-gray-500 border-gray-100';
  }
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isPast = event.status === EventStatus.Past;
  
  return (
    <div className={`bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all group flex flex-col md:flex-row gap-6 items-start md:items-center ${isPast ? 'opacity-70 grayscale-[0.5]' : ''}`}>
      {/* Image */}
      <div className="relative shrink-0 w-full md:w-32 aspect-4/3 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-inner">
        <Image 
          src={event.imageUrl} 
          alt={event.title} 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-1">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold border ${getStatusStyles(event.status)}`}>
            {event.status !== EventStatus.Past && <span className={`w-1.5 h-1.5 rounded-full ${event.status === EventStatus.Active ? 'bg-green-500' : event.status === EventStatus.Scheduled ? 'bg-orange-500' : 'bg-gray-400'}`}></span>}
            {event.status}
          </span>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">{event.visibility}</span>
        </div>
        
        <h3 className="text-gray-900 dark:text-white text-lg font-bold truncate group-hover:text-primary transition-colors">{event.title}</h3>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{event.date} • {event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Ticket className="w-4 h-4" />
            <span>{event.attendeeCount}/{event.capacity} {isPast ? 'Attended' : 'Reg.'}</span>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-1 w-full md:w-auto justify-end mt-2 md:mt-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors" title="Edit">
          <Edit className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-red-500 transition-colors" title="Delete">
          <Trash2 className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors" title="More">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
