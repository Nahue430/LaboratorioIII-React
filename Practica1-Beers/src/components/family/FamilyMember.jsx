const FamilyMember = ({personsSorted}) => {
    return(
        <div>
            
                {personsSorted.map((person, index)=>(
                    <div key ={index}>
                        <h3>Nombre: {person.name}</h3>
                        <p>Edad: {person.age}</p>
                    </div>
                ) 
                )}
            
        </div>
    )
}

export default FamilyMember