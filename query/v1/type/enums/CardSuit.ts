enum CardSuit {
  SPADES = "S",
  CLUBS = "C",
  DIAMONDS = "D",
  HEARTS = "H",
}

export default CardSuit;

export const CardSuitOrder: Record<CardSuit, number> = {
  [CardSuit.SPADES]: 0,
  [CardSuit.CLUBS]: 1,
  [CardSuit.DIAMONDS]: 2,
  [CardSuit.HEARTS]: 3,
};
