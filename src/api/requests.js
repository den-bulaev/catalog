const request = (url, options) => fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  })
  .then((result) => result);

export const getData = (BASE_URL, endpoint) => {
  const url = BASE_URL + endpoint;

  return request(url, { method: 'GET' });
};
