// MarcaParceira.jsx

import './MarcaParceira.css';

export function MarcaParceira() {
  return (
    <>
      <div className="marca-parceira">
        <h2>Marcas Parceiras</h2>

        <div className="marca-parceira-content">

          <img
            src="/img/peDireito.jpeg"
            alt="Pe Direito"
            className="marca-img"
          />

          <img
            src="/img/havaianas.jpeg"
            alt="Havaianas"
            className="marca-img"
          />

        </div>
      </div>
    </>
  );
}