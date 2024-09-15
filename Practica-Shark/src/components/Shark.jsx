import PropTypes from 'prop-types';


const Shark = ({ species, family, lifeExpectancy }) => {
    return (
      <div>
        <h2>Especie: {species}</h2>
        <p>Familia: {family}</p>
        <p>Expectativa de vida: {lifeExpectancy} años</p>
      </div>
    );
  };

  Shark.propTypes = {
    species : PropTypes.string,
    family : PropTypes.string,
    lifeExpectancy: PropTypes.number
  };
  
  export default Shark;