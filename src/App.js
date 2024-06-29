import './App.css';

import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Info } from './components/Info';
import { Main } from './components/Main';
import { Brands } from './components/Brands';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <Main />
      <Info />
      <Brands />
      <Slider />
    </div>
  );
}

export default App;
