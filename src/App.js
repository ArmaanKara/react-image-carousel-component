
import './App.css';
import ReactCarousel from './component/ReactCarousel';
import {cards} from './ImageData'

function App() {
  return (
    <div id="body">
      <ReactCarousel cards={cards} />
    </div>
  );
}

export default App;
