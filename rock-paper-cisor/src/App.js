import Ciseaux from './component/Ciseaux';
import Papier from './component/Papier';
import Pierre from './component/Pierre';
import Header from './component/Header';
  
import './style/App.css';

function App() {
  function choice(props) {
    return alert(props)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='table'>
        <Papier type='papier' choice=''/>
        <Ciseaux type='ciseaux'/>
        <Pierre type='pierre'/>
      </div>
    </div>
  );
}

export default App;
