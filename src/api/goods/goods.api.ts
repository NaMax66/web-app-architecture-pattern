import { GoodGroup } from '@/specification/api/GoodGroup';
import { routes } from '@/specification/api/GoodRoutes';

import HttpClient from '@/api/httpClient/httpClient';
import { Good } from '@/specification/DTO/Good';
import { isGood, isGoodArray } from '@/store/modules/goods/validator';

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

  async getGoods(group: GoodGroup): Promise<Good[]> {
    const result = await this.client.read(`${this.baseUrl}/${routes[group]}`);
    console.log(result);

    return isGoodArray(result) ? result : [];
  }
}
