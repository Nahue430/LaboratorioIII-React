import FamilyMember from "./FamilyMember"
const Family = ({personsSorted}) => {
    return(
        <div>
            <h1>Listado ordenado de personas</h1>
            <div>
                <FamilyMember personsSorted={personsSorted}/>
            </div>
        </div>
    )

}

export default Family