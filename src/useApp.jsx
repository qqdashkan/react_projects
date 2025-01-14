import { useEffect, useState } from "react";

export const useApp = ({ initialCards }) => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [blockClick, setBlockClick] = useState(false);

  const shuffleCards = () => {
    setScore(0);
    const shuffleCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
  };

  const handleCards = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  const resetCards = () => {
    setBlockClick(false);
    setFirstCard(null);
    setSecondCard(null);
    setScore((score) => score + 1);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setBlockClick(true);
      if (firstCard.label === secondCard.label) {
        setCards((prevCards) => {
          return prevCards.map((card) =>
            card.label === firstCard.label ? { ...card, matched: true } : card,
          );
        });
        resetCards();
      } else {
        setTimeout(() => resetCards(), 1000);
      }
    }
  }, [secondCard]);

  return {
    cards,
    score,
    firstCard,
    secondCard,
    blockClick,
    shuffleCards,
    handleCards,
  };
};
