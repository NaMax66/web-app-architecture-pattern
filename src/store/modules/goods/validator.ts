import { Good } from '@/specification/DTO/Good';

export function isGood(good: unknown): good is Good {
  return Boolean((good as Good).price) && Boolean((good as Good).title);
}

export function isGoodArray(goods: unknown): goods is Good[] {
  return Array.isArray(goods) && goods.every((el) => isGood(el));
}
