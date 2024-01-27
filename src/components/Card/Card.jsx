import React from "react";
import { Tooltip } from "react-tooltip";

import "./Card.scss";

const Card = ({ character }) => {
  const isAlive = (status) => {
    switch (status) {
      case "Alive":
        return "alive";
      case "Dead":
        return "dead";
      default:
        return "unk";
    }
  };
  const characterStatus = character.status;
  const statusClass = isAlive(characterStatus);
  return (
    <div className="card" key={character.id}>
      <div className="card-overlay">
        <div className="card-image">
          <img className={`${statusClass}`} src={character.image} alt={`${character.name}`} />
          <div className="card-char-status">
            <span>{character.status}</span>
          </div>
        </div>
        <div className="card-info">
          <div className="card-info__header">
            <h2>{character.name}</h2>
          </div>
          <div className="card-info__footer">
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Last location:</strong> {character.location.name}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
