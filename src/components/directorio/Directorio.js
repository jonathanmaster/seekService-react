import Header from "../header/Header";
import "../css/directory.css";
import Card from "./Card";
import cards from "./InfoCards";
import "../css/fondo-home.css"
import Footer from "../footer/Footer";


console.log(cards);

function Directorio() {
  return (
    <div className="">
      <Header />
      <h1 className="text-center text-5xl m-10 color-text font-medium">Directorio</h1>
      <div className="flex flex-wrap m-auto justify-evenly gap-6 py-0 px-28 mb-8">
        {cards.map((card) => (
          <div className="cursor-pointer card " key={card.id}>
            <Card imageSource={card.image}/>  
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Directorio;
