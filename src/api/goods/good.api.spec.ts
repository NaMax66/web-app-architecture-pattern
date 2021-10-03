import GoodsApi from './goods.api';
import httpClient from '@/api/httpClient/httpClient';
import { routes } from '@/specification/api/GoodRoutes';

const mockClient:httpClient = {
  read(url: string): Promise<unknown> {
    return new Promise<unknown>((resolve) => resolve(`params: ${url}`));
  },
};

const BASE_URL = 'test';

describe('goods.api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const api = new GoodsApi(mockClient, BASE_URL);

  describe('getGoods API method', () => {
    it('should call "read" method of httpClient', () => {
      const spy = jest.spyOn(mockClient, 'read');

      api.getGoods('books');

      expect(spy).toHaveBeenCalled();
    });

    it('should construct an url depends on goods group and pass it to httpClient', () => {
      const spy = jest.spyOn(mockClient, 'read');
      const goodGroup = 'tShirts';

      api.getGoods(goodGroup);

      expect(spy).toBeCalledWith(`${BASE_URL}/${routes[goodGroup]}`);
    });
  });
});
