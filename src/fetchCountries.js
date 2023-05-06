export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/name';
  const searchParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });
  const PARAMS = `/${name}?${searchParams}`;

  const url = BASE_URL + PARAMS;
  console.log(fetch(url));
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error('❌Oops, there is no country with that name');
    }
    return res.json();
  });
}
