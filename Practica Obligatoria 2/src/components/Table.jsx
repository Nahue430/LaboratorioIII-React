
const Table = ({netIncomes}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso</th>
                </tr>
            </thead>
            <tbody>
               {netIncomes.map((company, ID)=>(
                <tr key={ID}>
                    <td>{company.brand}</td>
                    <td>{company.income}</td>
                    
                </tr>
               )
            )} 
            </tbody>
        </table>
    )
}

export default Table