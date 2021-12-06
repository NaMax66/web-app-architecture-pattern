import axios from 'axios';
import HttpClient from '@/api/httpClient/httpClient';

export default class AxiosHttpClient implements HttpClient {
  get = async (url: string): Promise<unknown> => {
    const { data } = await axios.get(url);
    return data;
  }
}
