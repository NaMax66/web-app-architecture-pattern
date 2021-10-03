import HttpClient from '@/api/httpClient/httpClent';

export default class FetchClient implements HttpClient {
  read = async (url: string): Promise<unknown> => {
    const res = await fetch(url);
    return res.json();
  }
}
