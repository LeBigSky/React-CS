import Ciseaux from './component/Ciseaux';
import Papier from './component/Papier';
import Pierre from './component/Pierre';
import Header from './component/Header';
  
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <Ciseaux/>
      <Papier/>
      <Pierre/>
    </div>
  );
}

export default App;
