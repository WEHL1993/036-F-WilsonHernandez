import { useState, useEffect } from "react";
import { getRandomCocktails } from "../services/api";
import type { Cocktail } from "../services/api";

export default function Consumo() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCocktails();
  }, []);

  const loadCocktails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRandomCocktails(15);
      setCocktails(data);
    } catch (err) {
      setError("Error al cargar los cocteles. Por favor, intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getIngredients = (cocktail: Cocktail) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail];
      if (ingredient) {
        ingredients.push(`${measure || ""} ${ingredient}`.trim());
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-blue-700">Cocteles del Mundo</h2>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-blue-700">Cocteles del Mundo</h2>
        <div className="text-red-600 p-4 border border-red-300 rounded-lg bg-red-50">
          {error}
        </div>
        <button
          onClick={loadCocktails}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Reintentar
        </button>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Cocteles del Mundo</h2>
        <p className="text-gray-600">Explora nuestra colección de deliciosos cocteles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cocktails.map((cocktail) => (
          <div
            key={cocktail.idDrink}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl cursor-pointer transform hover:scale-105 transition-all"
            onClick={() => setSelectedCocktail(cocktail)}
          >
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {cocktail.strDrink}
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Categoría:</span> {cocktail.strCategory}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Tipo:</span> {cocktail.strAlcoholic}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Vaso:</span> {cocktail.strGlass}
                </p>
              </div>
              <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                {cocktail.strInstructions}
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalle */}
      {selectedCocktail && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCocktail(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedCocktail(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedCocktail.strDrinkThumb}
                alt={selectedCocktail.strDrink}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedCocktail.strDrink}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Categoría</p>
                  <p className="font-semibold">{selectedCocktail.strCategory}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tipo</p>
                  <p className="font-semibold">{selectedCocktail.strAlcoholic}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vaso</p>
                  <p className="font-semibold">{selectedCocktail.strGlass}</p>
                </div>
                {selectedCocktail.strIBA && (
                  <div>
                    <p className="text-sm text-gray-500">IBA</p>
                    <p className="font-semibold">{selectedCocktail.strIBA}</p>
                  </div>
                )}
                {selectedCocktail.strTags && (
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Etiquetas</p>
                    <p className="font-semibold">{selectedCocktail.strTags}</p>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ingredientes</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {getIngredients(selectedCocktail).map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Instrucciones</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCocktail.strInstructions}
                </p>
              </div>

              {selectedCocktail.strVideo && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Video</h3>
                  <a
                    href={selectedCocktail.strVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ver video de preparación
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
