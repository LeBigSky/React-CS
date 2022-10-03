import React from "react";

function Personnage({donnee, renomer}) {
// let renomer =()=>{
//     this.rename()
// }
    return( 
    <div>
<h1>Je m'appelle {donnee.nom} {donnee.prenom} j'habite à {donnee.commune} et j'ai {donnee.age}</h1>
<button onClick={renomer}>Cliquer pour renomer</button>
    </div>

    );
}

export default Personnage;