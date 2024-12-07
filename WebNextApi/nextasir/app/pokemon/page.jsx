"use client"; // Asegura que este componente se renderiza en el lado del cliente

import { useEffect, useState } from "react";
import { fetchData } from "@/componentes/funciones";
import Tarjeta from "@/componentes/Tarjeta"; // Asegúrate de ajustar la ruta según sea necesario

export default function RandomPokemonPage() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Genera un número aleatorio entre 1 y 1000
    const randomId = Math.floor(Math.random() * 1000) + 1;

    // Obtiene los datos del Pokémon aleatorio
    async function getPokemon() {
      try {
        let pokemonData = await fetchData({ id: randomId });
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    getPokemon();
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Tarjeta 
        nombre={pokemon.nombre}
        id={pokemon.numero}
        imgSrc={pokemon.img}
        pokert="pokemon"
      />
    </>
  );
}
