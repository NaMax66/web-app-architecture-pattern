import HttpClient from '@/api/httpClient/httpClient';

export default class FetchHttpClient implements HttpClient {
  get = async (url: string): Promise<unknown> => {
    const res = await fetch(url);
    return res.json();
  }

  post = async (url: string, params: Record<string, unknown>): Promise<unknown> => {
    const res = await fetch(url, params);
    return res.json();
  }
}
