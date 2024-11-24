import React, { useState, useEffect } from 'react';
import './section.module.css'; 
import { Card } from '@mui/material'; 
import Tarjeta from './Cards';



const getRandomPokemonGen1Id = (pokemonList) => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    return pokemonList[randomIndex].url.split('/').filter(Boolean).pop(); 
};

export const Pokemongen1 = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/generation/1/')
            .then(res => res.json())
            .then(data => {
                setPokemonList(data.pokemon_species);
                const pokemonPromises = [];
                for (let i = 0; i < 10; i++) {
                    const randomId = getRandomPokemonGen1Id(data.pokemon_species);
                    pokemonPromises.push(
                        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json())
                    );
                }
                return Promise.all(pokemonPromises);
            })
            .then(results => {
                const newPokemons = results.map(data => ({
                    numero: data.id,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                    imgJuego: data.sprites.front_default,
                    imgCvg: data.sprites.other.dream_world.front_default,
                    nombre: data.name,
                    experiencia: data.base_experience,
                    hp: data.stats[0].base_stat,
                    ataque: data.stats[1].base_stat,
                    defensa: data.stats[2].base_stat,
                    especial: data.stats[3].base_stat,
                }));
                setPokemons(newPokemons);
            });
    }, []);

    return (
        <section>
            <div className='pokemonestilos'>
            {pokemons.map((pokemon, index) => (
                <Tarjeta 
                    key={index}
                    // Título
                    title={pokemon.nombre}
                    // Texto  
                    text={pokemon.numero}
                    // Imagen 
                    imgSrc={pokemon.img}
                />
            ))}
            </div>
        </section>
        
    );
};