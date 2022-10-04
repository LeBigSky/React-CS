import Laptop  from '../assets/img/alienwarePNG.PNG'
import '../style/Articles.css'

export default function Article() {
  return (
<div className='card'>
    <img src={Laptop}alt="" />
        <div className=''>
            <h1 className='Titre'>Alienware Gaming Laptops</h1>
            <p className='Descriptif'>La nouvelle gamme X d’Alienware, qui comprend nos ordinateurs portables de jeu de 15 po et de 17 po les plus minces, repousse toutes les limites et est dotée des innovations Cryo-Tech exclusives.</p>
            <div className='card-end-line'>
                <button>Acheter</button>
                <h3 className='Prix'>PRIX: <span>14</span></h3>
            </div>
        
        </div>
   
</div>
  );
}

