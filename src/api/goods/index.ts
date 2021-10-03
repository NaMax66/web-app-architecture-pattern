/* explanation: you could use any transport library that implements httpClient */
import AxiosHttpClient from '@/api/httpClient/AxiosHttpClient';
// import FetchHttpClient from '@/api/httpClient/FetchHttpClient';
// import XMLHttpRequestHttpClient from '@/api/httpClient/XMLHttpRequestHttpClient';

import { BASE_API_URL } from '@/app-global-settings';
import GoodsApi from '@/api/goods/goods.api';

export default new GoodsApi(new AxiosHttpClient(), BASE_API_URL);
