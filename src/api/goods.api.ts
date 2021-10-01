import { BASE_API_URL } from '@/app-global-settings';
import { GoodGroup } from '@/specification/api/GoodGroup';
import { routes } from '@/specification/api/GoodRoutes';

export default async function getGoods(group: GoodGroup): Promise<unknown> {
  const responsePromise = await fetch(`${BASE_API_URL}/${routes[group]}`);

  return responsePromise.json();
}
