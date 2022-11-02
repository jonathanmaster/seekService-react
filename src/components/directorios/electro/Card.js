import "../../css/fondo-home.css";

export default function Card({ imageSource, url }) {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div className="contenedor-img">
      <a href={url}>
      <img
          src={imageSource}
          alt="imagenes-directorio"
          className="max-w-full"
        />
      </a>
      </div>
    </div>
  );
}
