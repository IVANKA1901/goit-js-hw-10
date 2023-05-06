import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange() {
  const searchValue = refs.input.value.trim();

  if (searchValue === '') {
    return;
  } else
    fetchCountries(searchValue)
      .then(countryName => {
        if (countryName.length < 2) {
          countriesCard(countryName);
          Notiflix.Notify.success(`✨Here are your results!`);
        } else if (countryName.length < 10 && countryName.length > 1) {
          countriesList(countryName);
          Notiflix.Notify.success(`✨Here are your results!`);
        } else {
          // clearResult();
          Notiflix.Notify.info(
            '⚠️Too many matches found. Please, enter a more specific name.'
          );
        }
      })
      .catch(() => {
        Notiflix.Notify.failure('❌Oops, there is no country with that name');
      });
}

function countriesList(country) {
  const markup = country
    .map(
      el =>
        `<li>
            <img src="${el.flags.svg}" alt="Country flag" width="40", height="40">
            <span>${el.name.official}</span>
        </li>`
    )
    .join('');

  refs.countryList.innerHTML = markup;
}

function countriesCard(country) {
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
