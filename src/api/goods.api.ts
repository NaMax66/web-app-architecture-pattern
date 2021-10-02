import { BASE_API_URL } from '@/app-global-settings';
import { GoodGroup } from '@/specification/api/GoodGroup';
import { routes } from '@/specification/api/GoodRoutes';

const DEFAULT_HEADERS = {
  'Content-type': 'application/json; charset=UTF-8',
} as const;

abstract class Client {
  abstract read(url: string): Promise<unknown>
}

class FetchClient implements Client {
  read = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  }
}

export class GoodsApi {
  private client: Client;

  private readonly baseUrl: string;

  private headers: Record<string, unknown>;

  constructor(
    client: Client,
    baseUrl: string,
    headers = DEFAULT_HEADERS,
  ) {
    this.client = client;
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getGoods(group: GoodGroup): Promise<unknown> {
    return this.client.read(`${this.baseUrl}/${routes[group]}`);
  }
}

export default new GoodsApi(new FetchClient(), BASE_API_URL);
