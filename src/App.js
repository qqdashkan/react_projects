import './App.css';

import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Info } from './components/Info';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <Main />
      <Info />
    </div>
  );
}

export default App;
