import HttpClient from '@/api/httpClient/httpClient';

export default class FetchHttpClient implements HttpClient {
  get = async (url: string): Promise<unknown> => {
    const res = await fetch(url);
    return res.json();
  }
}
