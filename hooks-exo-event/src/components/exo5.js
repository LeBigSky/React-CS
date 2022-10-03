import React from "react";

export default function Exo5() {
let alrt=()=>{
    alert('ce bouton fonctionne parfaitement!')
}
    return(
<div><h1>EXO 5</h1>
<button onClick={alrt}>Cliquer pour afficher une alerte</button>
</div>
    );
}