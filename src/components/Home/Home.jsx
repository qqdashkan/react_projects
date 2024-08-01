import { Header } from '../Header';
import { Modal } from '../Modal';
import { Info } from '../Info';
import { Main } from '../Main';
import { Brands } from '../Brands';
import { Slider } from '../Slider';

export function Home() {
  return (
    <div>
      <Modal />
      <Header />
      <Main />
      <Info />
      <Brands />
      <Slider />
    </div>
  );
}
