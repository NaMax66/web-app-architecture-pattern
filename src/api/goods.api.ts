import { BASE_API_URL } from '@/app-global-settings';
import { GoodGroup } from '@/specification/api/GoodGroup';
import { routes } from '@/specification/api/GoodRoutes';

/* explanation: you could use both transport without changing api realisation.
You could easy test api */
import HttpClient from '@/api/httpClient/httpClent';
import FetchHttpClient from '@/api/httpClient/FetchHttpClient';
import AxiosHttpClient from '@/api/httpClient/AxiosHttpClient';
import XMLHttpRequestHttpClient from '@/api/httpClient/XMLHttpRequestHttpClient';

const DEFAULT_HEADERS = {
  'Content-type': 'application/json; charset=UTF-8',
} as const;

export class GoodsApi {
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

  getGoods(group: GoodGroup): Promise<unknown> {
    return this.client.read(`${this.baseUrl}/${routes[group]}`);
  }
}

/* question: are headers depends on particular request? */
export default new GoodsApi(new XMLHttpRequestHttpClient(), BASE_API_URL);
