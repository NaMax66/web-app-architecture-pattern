import { BASE_API_URL } from '@/app-global-settings';

export default async function getTest(): Promise<unknown> {
  const responsePromise = await fetch(`${BASE_API_URL}/api`);

  return responsePromise.json();
}
