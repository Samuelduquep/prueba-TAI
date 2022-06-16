import "./ProductDetails.scss";

const ProductDetails = ({ product }) => {
  const {
    iavailability,
    ioee,
    ioeeteo,
    iperformance,
    iquality,
    matbatchcons,
    matcode,
    matcodecons,
    matname,
    matqtycons,
    quantityproduced,
    quantityrequired,
    serie,
    sitcolor,
    sitname,
    speed,
    tpar,
    tprep,
    tprod,
    wkucode,
    wkuname,
    wkutype,
    wohnumber,
    woocode,
  } = product.workunits[0];

  const opciones = (sitname) => {
    if (sitname.toLowerCase() === "production") {
      const color = "green";
      return color;
    } else if (sitname.toLowerCase() === "mezclando") {
      const color = "yellow";
      return color;
    }
  };

  return (
    <div className="container-details">
      <h3 className="head-text">{wkuname}</h3>

      <div className="seccion-one">
        <p className={opciones(sitname)}>{sitname}</p>
        <p>
          <span>Speed:</span> <span>{speed}</span>
        </p>
      </div>

      <hr />

      <div className="seccion-two">
        <div className="seccion-two-p">
          <p>Active Work:</p>
          <p>{wohnumber}</p>
        </div>
        <div>
          <p className="p-text">Product:</p>
          <p>{matcode}</p>
        </div>
      </div>
      <div className="seccion-three">
        <p>Product Name:</p>
        <p>{matname}</p>
      </div>

      <div className="seccion-four">
        <div className="flex">
          <p>Quality required:</p>
          <p>{quantityrequired}</p>
        </div>
        <div className="flex">
          <p>Quality Produced:</p>
          <p>{quantityproduced}</p>
        </div>
      </div>
      <hr />
      <div className="seccion-five">
        <div>
          <div className="producida"></div>
          <p>Producida</p>
        </div>
        <div>
          <div className="parada"></div>
          <p>Parada</p>
        </div>
        <div>
          <div className="paros"></div>
          <p>Paros</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
