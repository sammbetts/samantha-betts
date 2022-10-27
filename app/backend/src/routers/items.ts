import express, { Request, Response } from 'express';

import { Item } from '../types';
import items from './itemsData';

const itemRouter = express.Router();

const getItem = (itemId: string): Item | undefined =>
  items.find((u) => u.id === parseInt(itemId));

const getItemIndex = (itemId: string): number =>
  items.findIndex((u) => u.id === parseInt(itemId));

const saveItem = (item: Item) => items.push(item);

let itemIdCounter = items.length;

itemRouter.get('/', (req: Request, res: Response) => {
  return res.json(items);
});

itemRouter.get('/:itemId', (req: Request, res: Response) => {
  const { itemId } = req.params;
  const item = getItem(itemId);

  if (!item)
    return res.status(404).json({
      message: `Item with id '${itemId}' not found`,
    });

  return res.json(item);
});

itemRouter.post('/', (req: Request, res: Response) => {
  if (!req.body.name || !req.body.email || !req.body.emoji) {
    return res.status(400).json({ message: 'Please provide all values' });
  }

  const item: Item = {
    id: ++itemIdCounter,
    ...req.body,
  };

  saveItem(item);
  return res.status(201).json(item);
});

itemRouter.put('/:itemId', (req: Request, res: Response) => {
  const { itemId } = req.params;
  const item = getItem(itemId);

  if (!item)
    return res.status(404).json({
      message: `Item with id '${itemId}' not found`,
    });

  item.emoji = req.body.emoji;
  return res.json(item);
});

itemRouter.delete('/:itemId', (req: Request, res: Response) => {
  const { itemId } = req.params;
  const itemIndex = getItemIndex(itemId);

  if (itemIndex === -1)
    return res.status(404).json({
      message: `Item with id '${itemId}' not found`,
    });

  items.splice(itemIndex, 1);
  return res.json(items);
});

export default itemRouter;
