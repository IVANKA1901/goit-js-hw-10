import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function clearResult() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function onInputChange() {
  const searchValue = refs.input.value.trim();

  if (searchValue === '') {
    clearResult();
    return;
  } else
    fetchCountries(searchValue)
      .then(countryName => {
        if (countryName.length < 2) {
          countriesCard(countryName);
          console.log(`Your results`);
        } else if (countryName.length < 10 && countryName.length > 1) {
          countriesList(countryName);
          console.log(`Your results`);
        } else {
          clearResult();
          console.log(
            '⚠️Too many matches found. Please, enter a more specific name.'
          );
        }
      })
      .catch(() => {
        clearResult();
        console.log('❌Oops, there is no country with that name');
      });
}

function countriesList(country) {
  clearResult();
  const markup = country
    .map(
      el =>
        `<li>
            <img src="${el.flags.svg}" alt="Country flag" width="40", height="40">
            <span>${el.name.official}</span>
        </li>`
    )
    .join('');

  refs.countryList.insertAdjacentElement('beforeend', markup);
}

function countriesCard(country) {
  clearResult();
  const el = country[0];
  const markupCard = `<div>
        <div>
            <img src="${el.flags.svg}" alt="Country flag" width="55", height="35">
            <h2 class="country-card--name"> ${el.name.official}</h2>
        </div>
            <p>Capital: <span>${el.capital}</span></p>
            <p>Population: <span>${el.population}</span></p>
            <p>Languages: <span>${el.languages}</span></p>
    </div>`;
  refs.countryInfo.innerHTML = markupCard;
}
