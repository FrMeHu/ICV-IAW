import React from 'react';
import heroes from './heroes.json';
import styles from './theroes.module.css'

const HeroesList = () => {

  const publisher = "Marvel Comics";
  const filteredHeroes = heroes.filter(hero => hero.publisher === publisher);

  return (
      <table>
        <caption>Héroes de {publisher}</caption>
        <thead>
          <tr>
            <th>Superhéroe</th>
            <th>Alter ego</th>
            <th>Primera aparición</th>
            <th>Personajes</th>
          </tr>
        </thead>
        <tbody>
          {filteredHeroes.map((hero, index) => (
            <tr key={index}>
              <td>{hero.superhero}</td>
              <td>{hero.alter_ego}</td>
              <td>{hero.first_appearance}</td>
              <td>{hero.characters}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default HeroesList;
// listadeheroes

