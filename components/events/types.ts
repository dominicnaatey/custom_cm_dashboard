
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

export enum EventType {
  Webinar = 'Webinar',
  Workshop = 'Workshop',
  Networking = 'Networking',
  Meetup = 'Meetup',
  Reveal = 'Reveal'
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
  type: EventType;
  additionalDates?: string[];
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  additionalDates: string[];
  time: string;
  location: string;
  type: EventType;
  visibility: Visibility;
  status: EventStatus;
}
