import Header from "../header/Header";
import img from "../../assets/imagenes";





export default function About() {
  return (
    <div>
      <Header/>
      <div className="h-screen bg-violet-200 pt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl ">Sobre Nosotros</h2>
          <p className="pt-8 max-w-4xl ml-80 mb-10">
            Somos una compañia sin fines de lucro que quiere brindar un espacio
            libre, generando oferta y demanda de los mismos y así general un
            gran alcance nacional para la administración de todo tipo de
            servicios. Estamos apoyados por la Universidad de Cundinamarca y por
            la comunidad de Soacha. Nos pueden hacer llegar las peticiones o
            dudas en la caja de contacto, estamos dispuestos a colaborar con
            usted.
          </p>
          <img src={img.about} alt="aboutme" className="w-96 m-auto" />
        </div>
      </div>
    </div>
  );
}
