import illustration from '../../media/hero_image.png';

import './style.css';

export function Main() {
  return (
    <main className="main-content">
      <div className="wrapper">
        <div className="info">
          <h1>Jump into learning for less</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            consectetur blanditiis eaque voluptatibus tempora nemo vero incidunt
            maiores
          </p>
        </div>
        <img
          src={illustration}
          className="hero-image"
          alt="illustration"
          width="50%"
          height="50%"
        />
      </div>
    </main>
  );
}
