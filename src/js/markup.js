export function createInput() {
    const body = document.querySelector('body');
    const inputMarkup = `
    <input name = "country" type="text" id="search-box" 
    style="width: 300px; height: 20px; border: 1px solid #000; border-radius: 5px" 
    placeholder="Enter country name">
    `;

    body.insertAdjacentHTML('afterbegin', inputMarkup);
}

export function createLittleMurkup(countries) {
    return countries
        .reduce((acc, country) => {
            return acc += `<div class="countryItem" style='display: flex; align-items: center; gap: 10px; margin-top: 10px;'>
            <img width="25" src="${country.flags.svg}" alt="${country.name.official}">
            <div class="name" style='font-weight: 400; font-size: 20px;'>${country.name.official}</div>
            </div>`
        },'');
}

export function createBigMurkup(countries) {
    return countries
        .reduce((acc, country) => {
            const languages = Object.values(country.languages).join(', ');

            return acc += `<div class="countryItem" style="margin-top: 10px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <img width="30" src="${country.flags.svg}" alt="${country.name.official}">
                    <div class="name" style='font-weight: 700; font-size: 30px;'>${country.name.official}</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="capital" style='font-weight: 400; font-size: 20px;'><b>Capital:</b> ${country.capital}</div>
                    <div class="population" style='font-weight: 400; font-size: 20px;'><b>Population:</b> ${country.population}</div>
                    <div class="languages" style='font-weight: 400; font-size: 20px;'><b>Languages:</b> ${languages}</div>
                </div>
            </div>`
        },'');
}