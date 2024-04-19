const BASE_URL = 'https://restcountries.com/v3.1';
const filters = 'name,capital,population,flags,languages';
export async function fetchProductsByQuery(name) {
  try {
    const result = await fetch(
      `${BASE_URL}/name/${name}?fields=${filters}`
    );
    if (!result.ok) {
      throw new Error('Country not found');
    }
    return result.json();
  } catch (error) {
    console.log(error.message);
  }
}