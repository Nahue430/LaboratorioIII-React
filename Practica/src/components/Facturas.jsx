
import Factura from "./Factura";
import PropTypes from 'prop-types';
import { useState } from "react";

const Facturas =({facturas}) => {
    const [facturasFilter, setFacturasFilter] = useState(facturas);

    const facturasDulcesFilter = ()=> {
        const dulces = facturas.filter(factura=> factura.type === "dulce");
        setFacturasFilter(dulces)
    };

    const all = ()=> {
        setFacturasFilter(facturas)
    }


return (
    <div>
      <button onClick={facturasDulcesFilter}>Mostrar dulces</button>
      <button onClick={all}>Mostrar todas</button>
      {facturasFilter.map((factura) => (
        <Factura 
          key={factura.id} 
          name={factura.name} 
          type={factura.type} 
          price={factura.price} 
        />
      ))}
    </div>
  );
};

Facturas.propTypes = {
    facturas: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number,
                name: PropTypes.string,
                type: PropTypes.string,
                price: PropTypes.number,
            }
        )

    )
};

export default Facturas


