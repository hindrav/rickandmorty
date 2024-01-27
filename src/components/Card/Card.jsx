import React, { useEffect, useRef } from "react";
import 'intersection-observer';

import "./Card.scss";

const Card = ({ character }) => {
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transition = 'opacity 0.5s ease-in-out';
        }
      });
    });

    observer.observe(cardRef.current);

    // Clean observer when component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

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
    <div ref={cardRef} className="card" key={character.id}>
      <div className="card-overlay">
        <div className="card-image">
          <img
            className={`${statusClass}`}
            src={character.image}
            alt={`${character.name}`}
          />
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
