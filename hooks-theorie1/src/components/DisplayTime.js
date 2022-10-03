import React, {useState, useEffect} from "react";

function DisplayTime(){
    let [tempsJavaScript, setTempsJavaScript] = useState(new Date().getTime());

    setInterval(() => {
        setTempsJavaScript(new Date().getTime());
    }, 1000);
useEffect(()=>{
document.title = tempsJavaScript;
});
    return(
        <div>
            <p>
                temps JavaScript: {tempsJavaScript} millisecondes
            </p>
            <button onClick={()=> setTempsJavaScript(new Date().getTime())}>Mettre à jour</button>
        </div>
    );
}

export default DisplayTime;