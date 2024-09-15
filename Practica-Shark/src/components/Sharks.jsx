import PropTypes from 'prop-types';
import { useState } from 'react';
import Shark from './Shark';


const Sharks = ({ sharks }) => {
    const [filter, setFilter] = useState('');

    const filterSharks = sharks.filter(shark => shark.lifeExpectancy >= Number(filter));

    return (
        <div>
          <input 
            type="number" 
            placeholder="Filtrar por expectativa de vida" 
            value={filter}
            onChange={(tibu) => setFilter(tibu.target.value)} 
          />
          <div>
            {filterSharks.map(shark => (
              <Shark 
                key={shark.id} 
                species={shark.species} 
                family={shark.family} 
                lifeExpectancy={shark.lifeExpectancy} 
              />
            ))}
          </div>
        </div>
      );
    };

    Sharks.propTypes = {
        sharks: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                species: PropTypes.string,
                family : PropTypes.string,
                lifeExpectancy: PropTypes.number,
            })
            

        )
    };
    
export default Sharks    