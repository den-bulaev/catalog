import { getData } from './requests';

const BASE_URL = 'https://free.currconv.com';

export const convertCurrency = (from, to) => {
  const endpoint = `/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=951507a355fe57835c24`;

  return getData(BASE_URL, endpoint);
};
