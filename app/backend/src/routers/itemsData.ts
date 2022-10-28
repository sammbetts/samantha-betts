import { Item } from '../types';

// Ephemeral in-memory data store
const items: Item[] = [
  {
    id: 1,
    name: 'Alfie',
    date: new Date('2020-01-01'),
    emoji: '😺',
  },
  {
    id: 3,
    name: 'Samantha',
    date: new Date('2020-01-02'),
    emoji: '🌙',
  },
];

export default items;
