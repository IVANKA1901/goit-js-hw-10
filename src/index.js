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

function clearResult() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

let searchValue = '';
refs.countryInfo.classList.add('is-hidden');

function onInputChange() {
  searchValue = refs.input.value.trim();

  clearResult();

  if (searchValue === '') {
    refs.countryInfo.classList.add('is-hidden');
    return;
  } else
    fetchCountries(searchValue)
      .then(countryName => {
        if (countryName.length < 2) {
          refs.countryInfo.classList.remove('is-hidden');
          countriesCard(countryName);
          Notiflix.Notify.success(`✨Here are your results!`);
        } else if (countryName.length < 10 && countryName.length > 1) {
          refs.countryInfo.classList.add('is-hidden');
          countriesList(countryName);
          Notiflix.Notify.success(`✨Here are your results!`);
        } else {
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
        `<li class="country-class-list">
            <img src="${el.flags.svg}" alt="Country flag" width="50", height="35">
            <span class="country-list-name">${el.name.official}</span>
        </li>`
    )
    .join('');

  refs.countryList.innerHTML = markup;
}

function countriesCard(country) {
  const el = country[0];

  const markupCard = `
        <div class="country-card-info-cont">
            <img src="${
              el.flags.svg
            }" alt="Country flag" width="50", height="35">
            <h2 class="country-card-name"> ${el.name.official}</h2>
        </div>
            <p class="country-card-descr">Capital: <span>${
              el.capital
            }</span></p>
            <p class="country-card-descr">Population: <span>${
              el.population
            }</span></p>
            <p class="country-card-descr">Languages: <span>${Object.values(
              el.languages
            ).join(',')}</span></p>
    `;
  refs.countryInfo.innerHTML = markupCard;
}
