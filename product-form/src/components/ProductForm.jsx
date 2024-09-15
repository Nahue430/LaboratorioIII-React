import React, { useState } from 'react';

const ProductForm = ({setFinalPrice}) => {
const [productValue, setProductValue] = useState ('');
const [selectOption, setSelectOption] = useState ('');

const handleValueChange = (event) => {
    setProductValue(event.target.value);
};

const handleOptionChange = (event)=> {
    setSelectOption(event.target.value);
};

const calculateFinalPrice =() => {
    let finalPrice = parseFloat(productValue) || 0;

    switch (selectOption){
        case "casa":
            finalPrice += 1000;
            break;
        case "correo":
            finalPrice += 300;
            break;
        case "presencial":
            break; 
        default:
            break;           
    }
    setFinalPrice(finalPrice)
};

return (
    <div>
        <form>
            <label>
                Valor del producto:
                <input type="number"
                        value = {productValue}
                        onChange={handleValueChange}
                        placeholder='Ingrese el valor'
                />
            </label>
            <br />
            <label>
                Seleccione un envio:
                <select value={selectOption} onChange={handleOptionChange}>
                    <option value=""disabled>Seleccione una opcion</option>
                    <option value="casa">Envio a su casa</option>
                    <option value="correo">Retiro en correo</option>
                    <option value="presencial">Retiro por sucursal</option>
                </select>
            </label>
            <br />
            <button type='button' onClick={calculateFinalPrice}>Calcular precio final</button>
        </form>
    </div>
)


}

export default ProductForm