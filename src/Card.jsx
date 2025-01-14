const Card = ({
  cardsArray,
  handleCards,
  openedFirstCard,
  openedSecondCard,
  disabledClick,
}) => {
  return (
    <div className="mx-auto my-8 grid max-w-xl grid-cols-5 gap-4">
      {cardsArray.map((card) => {
        return (
          <div
            className={
              "flex aspect-square cursor-pointer flex-col items-center rounded-2xl bg-gradient-to-r from-[#775859] to-[#32161F] p-4 shadow-2xl shadow-black duration-300 hover:shadow-xl hover:shadow-black"
            }
            key={card.id}
            onClick={() => {
              if (!disabledClick && openedFirstCard != card) {
                handleCards(card);
              }
            }}
          >
            <img
              className={`${card.matched || openedFirstCard === card || openedSecondCard === card ? "" : "[transform:rotateY(-90deg)]"} absolute duration-300`}
              src={card.imgURL}
              alt={card.label}
              width={60}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
