import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft , faAnchorCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <h1>TEST BOOTSTRAP</h1>
      <Button variant="primary"> Test</Button>{'  '}
      <Button variant="danger"> Test</Button>{'  '}
      <Button variant="success"> Test</Button>
      <h2>Test FontAwesome</h2>
      <FontAwesomeIcon icon={faArrowRotateLeft}></FontAwesomeIcon>{'  '}
      <FontAwesomeIcon icon={faAnchorCircleCheck}></FontAwesomeIcon>{'  '}
      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>{'  '}
      
    </div>
  );
}

export default App;
