import React, { useState } from "react";


function ChangeDollar({ beers }) {
  const [dollar, setDollar] = useState(1500);

  
  const handleDollarChange = (event) => {
    setDollar(parseFloat(event.target.value) || 1500);
  };

  
  const calculatePrice = (price) => {
    return (price * dollar); 
  };
};




export default ChangeDollar
