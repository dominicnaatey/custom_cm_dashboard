import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface EventHeaderProps {
  onBack: () => void;
  onSave: (e: React.FormEvent) => void;
}

export const EventHeader: React.FC<EventHeaderProps> = ({ onBack, onSave }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Event</h2>
          <p className="text-gray-500 text-sm">Configure your event experience and settings.</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button 
          type="button"
          onClick={onBack}
          className="px-4 py-2 rounded-lg text-gray-500 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={onSave}
          className="px-6 py-2 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95"
        >
          Save Event
        </button>
      </div>
    </div>
  );
};
