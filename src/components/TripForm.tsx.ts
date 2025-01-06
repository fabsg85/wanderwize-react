import React, { useState } from 'react';

interface TripFormProps {
  onSubmit: (budget: number, interests: string[], days: number) => void;
}

const TripForm: React.FC<TripFormProps> = ({ onSubmit }) => {
  const [budget, setBudget] = useState<number>(0);
  const [interests, setInterests] = useState<string[]>([]);
  const [days, setDays] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(budget, interests, days);
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter(interest => interest !== value));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="budget" className="block">Presupuesto:</label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Intereses:</label>
        <div className="space-x-2">
          {['Cultura', 'Naturaleza', 'Gastronomía', 'Aventura'].map((interest) => (
            <label key={interest} className="inline-flex items-center">
              <input
                type="checkbox"
                value={interest}
                onChange={handleInterestChange}
                className="form-checkbox"
              />
              <span className="ml-2">{interest}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="days" className="block">Días de viaje:</label>
        <input
          type="number"
          id="days"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          min="1"
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Generar Recomendaciones
      </button>
    </form>
  );
};

export default TripForm;

