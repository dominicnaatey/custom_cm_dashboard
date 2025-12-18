
import { Event, EventStatus, Visibility } from './types';

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Summer Sale Launch Party',
    status: EventStatus.Active,
    visibility: Visibility.Public,
    date: 'Aug 24, 2023',
    time: '2:00 PM',
    location: 'New York City, NY',
    attendeeCount: 124,
    capacity: 200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPAL7lDB2mVKUm6uY48-1SL-ajmJ7NkcwjFfD-ihZzT_l6tR1NhfsY8Le4xNZ5tfIRA4sFqaSM5Xc-AX6tLeM7BwD8x7YFhJpaIjIH3ayY4IRZWYnH3qQyJo_3_2JcLtwCQsjGGO_MkG2GfmGOhiT8gKkkvO-7zfUyv74yVPBMaBCBcJ7e1JWSh4WoB98EEtxz1Itt0FJG1y3KirszzEZCRz7iZycg9aeIiQPbgISZc-gsGw_98RT-780lx1Look0kDGWvVB-X2w',
    type: 'Reveal'
  },
  {
    id: '2',
    title: 'Q4 Strategy Workshop',
    status: EventStatus.Draft,
    visibility: Visibility.Internal,
    date: 'Sep 10, 2023',
    time: '10:00 AM',
    location: 'Online (Zoom)',
    attendeeCount: 15,
    capacity: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpMnMWzso5a9Tj4tiRjUrUe6gxflPAcWHKpyVmrijP8nEhdFxLPKTFtYKnv3OXZ3UgAq0nr1BrzJFaV7RfXtpJbOu2JMbw_2m4OeWfIRFkwHX2G93T6lK7gNPu6jOVTPV3oTFwBgxYY86MkZVpPsJDuLxuiW3h63rJ92yjHJPalr8ngGbgIsc7BToyQ48wgYkyPbL_xBmZa6U8ySRqATkZxrGVUCGIf9IrTzVA8qkvWw9uEM8HEHYSrcb_ZRca__lKKwt3Rx2-6Q',
    type: 'Workshop'
  },
  {
    id: '3',
    title: 'New Product Reveal',
    status: EventStatus.Scheduled,
    visibility: Visibility.Public,
    date: 'Oct 05, 2023',
    time: '5:00 PM',
    location: 'San Francisco, CA',
    attendeeCount: 0,
    capacity: 500,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi818sSc7S3RYDQgXpwqheD0nlstDK2poSb_tIYQJ-bDATw75tFcjwIGo7zmokw_8Emdv4_l3CNxnIwwMR8mfACfO0IrWsFcNmrOTXlqyYJ1OnugNwayYMIzqOCn3bn7l87JKwGSH40Z4b2RT1stmCABlOehnq62xHLYgQN2-wQAmtG_kG8Vpzw6XIZkGUsrWdy_2ZalrM3kU5pqsSr1al7Mj6jTkKNB6j5cUL_-R5bo3DPNaHZgD7j60ReseCZKXyUG7f0bh0oQ',
    type: 'Webinar'
  },
  {
    id: '4',
    title: 'Holiday Community Meetup',
    status: EventStatus.Past,
    visibility: Visibility.Public,
    date: 'Dec 20, 2022',
    time: '6:00 PM',
    location: 'London, UK',
    attendeeCount: 85,
    capacity: 100,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjH3HtsIMv5YUuFGdUlDEF16JH7i7W_bxd-o4WGTLiYIVGIXmmz8-Aj8BOlaCDn13pvv0lGIlahbUtUdohFriumOFkAqiCX1Id6tmV3MY_emieLn7_OdwLqylz32W26mPM49hTng2V5BfFDXm8RWmul8-Ib5rd498OlnR369AQlrKgVBX1AVB0hGZGtbWCpk3-1LnQRzRoSncV4MsudkUiJQcE4lE2reXrhM8lQQWcvK-8bD1MLueijbDHjnIbIOHidBYvZisAOQ',
    type: 'Meetup'
  }
];
