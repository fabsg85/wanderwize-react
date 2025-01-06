import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TripForm from './components/TripForm';
import TripRecommendation from './components/TripRecommendation';

// Datos de ejemplo (en una versión real, esto vendría de una API o base de datos)
const destinations = [
  {
    name: "París",
    description: "La ciudad del amor, famosa por su cultura y gastronomía.",
    activities: ["Visitar la Torre Eiffel", "Explorar el Louvre", "Paseo por los Campos Elíseos"]
  },
  {
    name: "Tokio",
    description: "Una metrópolis que mezcla lo moderno con lo tradicional.",
    activities: ["Visitar el templo Senso-ji", "Explorar el distrito de Akihabara", "Disfrutar del sushi en el mercado de Tsukiji"]
  },
  // Añade más destinos aquí
];

const App: React.FC = () => {
  const [recommendation, setRecommendation] = useState<typeof destinations[0] | null>(null);

  const handleFormSubmit = (budget: number, interests: string[], days: number) => {
    // Lógica simple de recomendación (en una versión real, esto sería más complejo)
    const randomIndex = Math.floor(Math.random() * destinations.length);
    setRecommendation(destinations[randomIndex]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Planifica tu viaje</h2>
        <TripForm onSubmit={handleFormSubmit} />
        {recommendation && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Recomendación para ti:</h3>
            <TripRecommendation destination={recommendation} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

