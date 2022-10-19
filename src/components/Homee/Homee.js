import office from "../../assets/media/inicio/office.svg";

const Homee = () => {
  return (
    <div className="home">
      <div className="img-home" >
        <img src={office} alt="oficina"/>
      </div>

      <div className="__div">
        <h2 className="--h2">En GoldStyle Encontraras Las mejores ofertas!!</h2>
        <p className="--p">
          En la semana de la infancia damos 30% de descuento en nuestros
          productos!!!
        </p>
      </div>
    </div>
  );
};

export default Homee;
