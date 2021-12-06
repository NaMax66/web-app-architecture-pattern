import GoodsApi from './goods.api';
import httpClient from '@/api/httpClient/httpClient';
import { routes } from '@/specification/api/GoodRoutes';

const mockClient:httpClient = {
  get(url): Promise<unknown> {
    return new Promise<unknown>((resolve) => resolve(`params: ${url}`));
  },

  post(url, params): Promise<unknown> {
    return new Promise<unknown>((resolve) => resolve(`url: ${url}; params: ${params}`));
  },
};

const BASE_URL = 'test';

describe('goods.api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const api = new GoodsApi(mockClient, BASE_URL);

  describe('getGoods API method', () => {
    it('should call "get" method of httpClient', () => {
      const spy = jest.spyOn(mockClient, 'get');

      api.getGoods('books');

      expect(spy).toHaveBeenCalled();
    });

    it('should construct an url depends on goods group and pass it to httpClient', () => {
      const spy = jest.spyOn(mockClient, 'get');
      const goodGroup = 'tShirts';

      api.getGoods(goodGroup);

      expect(spy).toBeCalledWith(`${BASE_URL}/${routes[goodGroup]}`);
    });
  });
});
