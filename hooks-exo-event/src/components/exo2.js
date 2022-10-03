import React ,{useState, ClipboardEvent}from "react";


export default function Exo2() {
const [text, setText] = useState({
    text:"Voici un simple texte, remplacez-le en ecrivant ci-dessous"
})
let handlekey= (event)=>{
    if (event.key=== 'Enter')
    {
        setText({text:event.target.value})
        alert('yup')
    }
}
let Onfocus=(event) =>{
    event.currentTarget.style.backgroundColor = "green";
}
let Onblur=(event) => {
    event.currentTarget.style.backgroundColor = "";
}
const copyHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    alert(event.target.value);
  };
   
    return(
<div><h1>EXO 2</h1>
<p>{text.text}</p>
<input type="texte" onKeyDown={handlekey} onCopy={copyHandler} onFocus={Onfocus} onBlur={Onblur}/>
</div>
    );
}