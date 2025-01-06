import React from 'react';

interface Destination {
  name: string;
  description: string;
  activities: string[];
}

interface TripRecommendationProps {
  destination: Destination;
}

const TripRecommendation: React.FC<TripRecommendationProps> = ({ destination }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{destination.name}</h2>
      <p className="mb-4">{destination.description}</p>
      <h3 className="font-semibold mb-2">Actividades recomendadas:</h3>
      <ul className="list-disc pl-5">
        {destination.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripRecommendation;

