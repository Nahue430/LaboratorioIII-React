const Person = ({ name }) => {
    const newName = name.filter(person => person.startsWith('P'))
     
 
     return (
         <div>
             <h1>Filtrado letra P</h1>
             <ul>
                 {newName.map((person, index)=>(
                     <li key ={index}>
                         Nombre : {person}
                     </li>
                 ))}
             </ul>
         </div>
 
     )
 
 }
 
 export default Person