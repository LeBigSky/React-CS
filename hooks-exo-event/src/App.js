import Exo1 from './components/exo1';
import Exo2 from './components/exo2';

import Exo5 from './components/exo5';
import './App.css';

function App() {
  const copyHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    alert(event.target.value);
  };
  return (

   <div>
    <Exo1/>
    <Exo2 onCopy={copyHandler}/>
    <Exo5/>
   </div>
  );
}

export default App;
