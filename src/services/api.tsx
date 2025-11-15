// src/services/api.tsx

// API de TheCocktailDB
const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// Interfaz para un coctel
export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

// Interfaz para la respuesta de la API
export interface CocktailResponse {
  drinks: Cocktail[];
}

// Función para obtener un coctel por ID
export async function getCocktailById(id: string): Promise<CocktailResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener coctel:", error);
    throw error;
  }
}

// Función para obtener múltiples cocteles aleatorios
export async function getRandomCocktails(count: number): Promise<Cocktail[]> {
  try {
    const promises = Array.from({ length: count }, () =>
      fetch(`${API_BASE_URL}/random.php`).then(res => res.json())
    );
    const results = await Promise.all(promises);
    return results.map(result => result.drinks[0]);
  } catch (error) {
    console.error("Error al obtener cocteles aleatorios:", error);
    throw error;
  }
}

// Función para buscar cocteles por nombre
export async function searchCocktails(name: string): Promise<CocktailResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${name}`);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al buscar cocteles:", error);
    throw error;
  }
}

// Función genérica GET
export async function getData(endpoint: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
}

// Función genérica POST
export async function postData(endpoint: string, data: unknown) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al enviar datos:", error);
    throw error;
  }
}

// Puedes agregar PUT, DELETE, PATCH según sea necesario.
