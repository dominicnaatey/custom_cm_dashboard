export interface User {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  status: 'Published' | 'Draft';
  views: string;
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target?: string;
  time: string;
  isNew?: boolean;
}

export interface AnalyticsData {
  day: string;
  visitors: number;
}
