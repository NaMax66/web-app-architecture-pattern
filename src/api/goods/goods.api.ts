import { GoodGroup } from '@/specification/api/GoodGroup';
import { routes } from '@/specification/api/GoodRoutes';

import HttpClient from '@/api/httpClient/httpClient';

/* question: is it necessary to have default headers here? */
const DEFAULT_HEADERS = {
  'Content-type': 'application/json; charset=UTF-8',
} as const;

export default class {
  private client: HttpClient;

  private readonly baseUrl: string

  private headers: Record<string, unknown>

  constructor(
    client: HttpClient,
    baseUrl: string,
    headers = DEFAULT_HEADERS,
  ) {
    this.client = client;
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  /**
   * @description construct an url depends on goods group and pass it to httpClient
   *
   * @param group
   */

  getGoods(group: GoodGroup): Promise<unknown> {
    return this.client.read(`${this.baseUrl}/${routes[group]}`);
  }
}
