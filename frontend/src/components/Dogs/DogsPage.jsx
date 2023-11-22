import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import DogsCart from "./DogsCart";

const DogsPage = () => {
  const { allDogs } = useContext(AppContext);

  return (
    <>
      <section className="dogs-container">
        {allDogs.map((dog) => {
          return (
            <div key={dog.id}>
              <DogsCart
                id={dog.id}
                name={dog.name}
                breed={dog.breed}
                description={dog.description}
                price={dog.price}
                imageUrl={dog.imageUrl}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DogsPage;
