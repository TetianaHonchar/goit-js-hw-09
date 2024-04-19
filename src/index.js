import { createInput, createLittleMurkup, createBigMurkup} from './js/markup.js';
import { fetchProductsByQuery } from './js/fetchCountries.js';
// import lodashDebounce from 'https://cdn.jsdelivr.net/npm/lodash.debounce@4.0.8/+esm';
// import notiflix from 'https://cdn.jsdelivr.net/npm/notiflix@3.2.7/+esm';
import lodashDebounce from 'lodash.debounce';
import notiflix from 'notiflix';

createInput();

const searchBoxRef = document.querySelector('#search-box');
const countryInfoRef = document.querySelector('.country-info');

searchBoxRef.addEventListener('input', lodashDebounce(OnSearchBoxInput, 300));

async function OnSearchBoxInput() {
    const name = searchBoxRef.value.toLowerCase().trim();
      
    if (!name) {
        countryInfoRef.innerHTML = '';
        return;
      }
    
    try {
        const countries = await fetchProductsByQuery(name);
        
        if (!countries || countries.length === 0) {
            notiflix.Notify.failure('Oops, there is no country with that name');
            countryInfoRef.innerHTML = '';
            return;
        }

        if (countries.length > 10) {
            notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            return; 
        }

        if (countries.length >= 2 || countries.length <= 10) {
            countryInfoRef.innerHTML = createLittleMurkup(countries);
        }

        if (countries.length === 1) {
            countryInfoRef.innerHTML = createBigMurkup(countries);
        }
}   catch (error) {
    console.log(error.message);
}
        
}
