import { useState, useEffect } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./Product.scss"

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("dataMachine")) {
      getDataLS();
      return;
    } else {
      getDataApi();
      return;
    }
  }, []);

  const getDataApi = async () => {
    console.log("desde api");
    const url = import.meta.env.VITE_API_URL;
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        FuncName: "Tai.Backend.Qplant",
        ActiveActor: "WKU11",
        FuncParam01: "OEEMONITOR2",
        FuncParam02: "SPAIN",
        FuncParam03: "",
        FuncParam04: "",
        FuncParam05: "",
        TraceLog: "Y",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const resp = await fetch(url, requestOptions);
      const resul = await resp.json();
      setData(resul);
      localStorage.setItem("dataMachine", JSON.stringify(resul));
    } catch (error) {
      console.log(error);
    }
  };

  const getDataLS = () => {
    console.log("desde local");
    setLoading(true);
    const dataLS = JSON.parse(localStorage.getItem("dataMachine"));
    setData(dataLS);
    setLoading(false);
  };

  const { Payload } =  data

  return  (

     <div className="container">
       {Payload?.map(product=>(
         <ProductDetails key={product.workunits[0].wooid} product={product}/>
       ))}
    </div>
  )
 ;
}

export default Product;
