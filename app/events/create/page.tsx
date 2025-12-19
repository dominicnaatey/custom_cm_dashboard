'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Sparkles, 
  Bold, 
  Italic, 
  Link as LinkIcon, 
  List, 
  ImagePlus, 
  Settings, 
  Calendar, 
  MapPin,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { EventStatus, Visibility, EventType } from '@/components/events/types';

export default function CreateEventPage() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '12:00',
    location: '',
    type: EventType.Webinar,
    visibility: Visibility.Public,
    status: EventStatus.Scheduled,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMagicFill = async () => {
    setIsGenerating(true);
    try {
      // Mock AI generation
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormData(prev => ({
        ...prev,
        title: "Annual Tech Innovation Summit 2024",
        location: "San Francisco Convention Center",
        visibility: Visibility.Public,
        description: "Join us for a day of inspiring talks, networking, and innovation showcasing the latest trends in technology."
      }));
    } catch {
      console.error("Failed to fetch AI suggestions");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date) return;

    // In a real app, this would make an API call
    console.log('Saving event:', {
      ...formData,
      imageUrl: previewImage
    });
    
    router.push('/events');
  };

  const onBack = () => {
    router.back();
  };

  const insertFormatting = (tag: string) => {
    const textarea = document.getElementById('event-description') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    const before = text.substring(0, start);
    const after = text.substring(end);
    
    let newText = '';
    if (tag === 'bold') newText = `**${selectedText || 'bold text'}**`;
    else if (tag === 'italic') newText = `*${selectedText || 'italic text'}*`;
    else if (tag === 'link') newText = `[${selectedText || 'link text'}](https://)`;
    else if (tag === 'list') newText = `\n- ${selectedText || 'list item'}`;

    const updatedValue = before + newText + after;
    setFormData({ ...formData, description: updatedValue });
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + newText.length, start + newText.length);
    }, 0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 overflow-y-auto px-8 py-6 bg-background-light dark:bg-background-dark"
    >
      {/* Header */}
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
              onClick={handleSubmit}
              className="px-6 py-2 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95"
            >
              Save Event
            </button>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* Main Content (Left) */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Title & Description */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content</h3>
                <button 
                  type="button"
                  onClick={handleMagicFill}
                  disabled={isGenerating}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary dark:text-primary-light rounded-lg text-sm font-bold border border-primary/20 hover:bg-primary/20 transition-all disabled:opacity-50"
                >
                  {isGenerating ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  {isGenerating ? 'Generating...' : 'Magic AI Fill'}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Event Title</label>
                  <input 
                    type="text"
                    required
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Annual Design Summit 2024"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-lg font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Description</label>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
                    <div className="flex items-center gap-1 p-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                      <ToolbarButton icon={<Bold className="w-5 h-5" />} onClick={() => insertFormatting('bold')} />
                      <ToolbarButton icon={<Italic className="w-5 h-5" />} onClick={() => insertFormatting('italic')} />
                      <ToolbarButton icon={<LinkIcon className="w-5 h-5" />} onClick={() => insertFormatting('link')} />
                      <ToolbarButton icon={<List className="w-5 h-5" />} onClick={() => insertFormatting('list')} />
                    </div>
                    <textarea 
                      id="event-description"
                      rows={10}
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                      placeholder="Share what this event is about..."
                      className="w-full px-4 py-3 border-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-0 outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Media Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Media</h3>
              <div className="space-y-4">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 flex flex-col items-center justify-center gap-3 hover:border-primary cursor-pointer transition-colors bg-gray-50/50 dark:bg-gray-800/50"
                >
                  {previewImage ? (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image 
                        src={previewImage} 
                        alt="Preview" 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white font-bold">Change Image</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <ImagePlus className="w-12 h-12 text-gray-400" />
                      <div className="text-center">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">Upload cover image</p>
                        <p className="text-sm text-gray-500">PNG, JPG or WebP (max 5MB)</p>
                      </div>
                    </>
                  )}
                  <input 
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Content (Right) */}
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
                    onChange={e => setFormData({...formData, type: e.target.value as EventType})}
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
                    onChange={e => setFormData({...formData, status: e.target.value as EventStatus})}
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
                    onChange={e => setFormData({...formData, visibility: e.target.value as Visibility})}
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
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Start Time</label>
                  <input 
                    type="time"
                    required
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
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
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Venue or Link</label>
                <textarea 
                  rows={2}
                  required
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  placeholder="San Francisco, CA or Online Meeting Link"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-20"></div>
    </motion.div>
  );
};

const ToolbarButton: React.FC<{ icon: React.ReactNode; onClick: () => void }> = ({ icon, onClick }) => (
  <button 
    type="button"
    onClick={onClick}
    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    {icon}
  </button>
);
