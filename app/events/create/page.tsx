'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { EventStatus, Visibility, EventType, EventFormData } from '@/components/events/types';
import { EventHeader } from '@/components/events/create/EventHeader';
import { EventMainContent } from '@/components/events/create/EventMainContent';
import { EventSidebar } from '@/components/events/create/EventSidebar';

export default function CreateEventPage() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    description: '',
    date: '',
    additionalDates: [],
    time: '12:00',
    location: '',
    type: EventType.Webinar,
    visibility: Visibility.Public,
    status: EventStatus.Scheduled,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 overflow-y-auto px-8 py-6 bg-background-light dark:bg-background-dark"
    >
      <EventHeader onBack={onBack} onSave={handleSubmit} />

      <div className="flex flex-col xl:flex-row gap-6">
        <EventMainContent 
          formData={formData}
          setFormData={setFormData}
          handleMagicFill={handleMagicFill}
          isGenerating={isGenerating}
          previewImage={previewImage}
          onImageUpload={handleImageUpload}
        />

        <EventSidebar 
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      
      <div className="h-20"></div>
    </motion.div>
  );
}
