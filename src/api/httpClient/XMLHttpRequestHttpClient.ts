import HttpClient from '@/api/httpClient/httpClient';

export default class AxiosHttpClient implements HttpClient {
  get = async (url: string): Promise<unknown> => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      resolve(JSON.parse(xhr.response));
    };

    xhr.onerror = () => {
      reject(new Error('something goes wrong'));
    };
    xhr.send();
  })

  /* todo implement */
  // eslint-disable-next-line class-methods-use-this
  post(url: string, params: Record<string, unknown>): Promise<unknown> {
    return Promise.resolve(undefined);
  }
}
