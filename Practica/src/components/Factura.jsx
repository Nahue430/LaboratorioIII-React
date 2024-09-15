import PropTypes from 'prop-types';

const Factura = ({ name, type, price }) => {
    return (
        <div>
            <h2>
                Nombre: {name}
            </h2>
            <p>
                Tipo: {type}
            </p>
            <p>
                Precio: ${price}
            </p>
        </div>
    )
};

Factura.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
  };
  
  export default Factura;