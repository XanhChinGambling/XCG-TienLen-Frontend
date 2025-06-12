enum CardRank {
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  JACK = "J",
  QUEEN = "Q",
  KING = "K",
  ACE = "A",
  TWO = "2",
}

export default CardRank;

export const CardRankOrder: Record<CardRank, number> = {
  [CardRank.THREE]: 0,
  [CardRank.FOUR]: 1,
  [CardRank.FIVE]: 2,
  [CardRank.SIX]: 3,
  [CardRank.SEVEN]: 4,
  [CardRank.EIGHT]: 5,
  [CardRank.NINE]: 6,
  [CardRank.TEN]: 7,
  [CardRank.JACK]: 8,
  [CardRank.QUEEN]: 9,
  [CardRank.KING]: 10,
  [CardRank.ACE]: 11,
  [CardRank.TWO]: 12,
};
