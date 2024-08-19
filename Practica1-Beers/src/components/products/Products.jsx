const Product = ({name}) => {
    return (
        <div>
            <h1>Nombres de productos</h1>
            <ul>
                {name.map((producto, index)=> (
                    <li key ={index}>
                       Podructo: {producto}

                    </li>
                )
                )}
            </ul>
        </div>
    )

}

export default Product