export interface Items {
  id: number;
  name: string;
  date: Date;
  emoji: string;
}

export interface ItemFormData {
  name: string;
  date: Date;
  emoji: string;
}

export type ItemFormField = keyof ItemFormData;
