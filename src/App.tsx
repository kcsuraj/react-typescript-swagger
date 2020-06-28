import React, { useState, useEffect } from "react";
import { apiService } from "./api";

const App: React.FC = () => {
  const [pets, setPets] = useState<any>({});

  useEffect(() => {
    getPets();
  }, []);

  const getPets = async () => {
    const response = await apiService.getPetById(1);
    setPets(response);
  };

  return (
    <div>
      <ul>
        <li>Name: {pets.name}</li>
        <li>Status: {pets.status}</li>
      </ul>
    </div>
  );
};

export default App;
