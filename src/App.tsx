import React, { useState, useEffect } from "react";
import * as Api from "typescript-fetch-api";

const petService = new Api.PetApi();

const App: React.FC = () => {
  const [pets, setPets] = useState<any>({});

  useEffect(() => {
    getPets();
  }, []);

  const getPets = async () => {
    const response = await petService.getPetById({ petId: 1 });
    setPets(response);
  };

  console.log(pets);

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
