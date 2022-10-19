import "../css/fondo-home.css";

export default function Card({ imageSource }) {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div className="contenedor-img">
        <img
          src={imageSource}
          alt="imagenes-directorio"
          className="max-w-full"
        />
      </div>
    </div>
  );
}
