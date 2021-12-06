import axios from 'axios';
import HttpClient from '@/api/httpClient/httpClient';

export default class AxiosHttpClient implements HttpClient {
  get = (url: string): Promise<unknown> => axios.get(url)

  post = (url: string, params: Record<string, unknown>): Promise<unknown> => axios.post(url, params)
}
