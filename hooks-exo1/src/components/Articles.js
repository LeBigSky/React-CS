import React from "react";


function Articles({car}) {

    return( 
    <div>
<h4>Nouveau: {car.marque} un {car.models} de type: {car.orientation}</h4>
    </div>

    );
}

export default Articles;