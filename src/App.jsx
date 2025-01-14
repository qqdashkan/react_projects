import { data } from "./data.js";
import { useApp } from "./useApp.jsx";
import Card from "./Card.jsx";

function App() {
  const {
    score,
    cards,
    firstCard,
    secondCard,
    blockClick,
    shuffleCards,
    handleCards,
  } = useApp({
    initialCards: data,
  });

  return (
    <section className={"container"}>
      <button
        onClick={shuffleCards}
        className={
          "mx-auto mt-10 flex items-center justify-center rounded-2xl bg-[#09814A] px-10 py-2 text-2xl font-bold text-white"
        }
      >
        Start
      </button>
      <Card
        cardsArray={cards}
        handleCards={handleCards}
        openedFirstCard={firstCard}
        openedSecondCard={secondCard}
        disabledClick={blockClick}
      />
      <h1 className={"mb-10 text-center text-4xl font-bold"}>Score: {score}</h1>
    </section>
  );
}

export default App;
