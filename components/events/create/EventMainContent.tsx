import React, { useRef } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Bold, 
  Italic, 
  Link as LinkIcon, 
  List, 
  ImagePlus, 
  Loader2 
} from 'lucide-react';
import { EventFormData } from '@/components/events/types';

interface EventMainContentProps {
  formData: EventFormData;
  setFormData: React.Dispatch<React.SetStateAction<EventFormData>>;
  handleMagicFill: () => void;
  isGenerating: boolean;
  previewImage: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToolbarButton: React.FC<{ icon: React.ReactNode; onClick: () => void }> = ({ icon, onClick }) => (
  <button 
    type="button"
    onClick={onClick}
    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    {icon}
  </button>
);

export const EventMainContent: React.FC<EventMainContentProps> = ({
  formData,
  setFormData,
  handleMagicFill,
  isGenerating,
  previewImage,
  onImageUpload
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setFormData(prev => ({ ...prev, description: updatedValue }));
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + newText.length, start + newText.length);
    }, 0);
  };

  return (
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
              onChange={e => setFormData(prev => ({...prev, title: e.target.value}))}
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
                onChange={e => setFormData(prev => ({...prev, description: e.target.value}))}
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
              onChange={onImageUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
