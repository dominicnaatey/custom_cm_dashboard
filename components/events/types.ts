
export enum EventStatus {
  Active = 'Active',
  Draft = 'Draft',
  Scheduled = 'Scheduled',
  Past = 'Past'
}

export enum Visibility {
  Public = 'Public',
  Internal = 'Internal'
}

export interface Event {
  id: string;
  title: string;
  status: EventStatus;
  visibility: Visibility;
  date: string;
  time: string;
  location: string;
  attendeeCount: number;
  capacity: number;
  imageUrl: string;
  type: 'Webinar' | 'Workshop' | 'Meetup' | 'Reveal';
}
