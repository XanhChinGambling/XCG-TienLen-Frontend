import CardRank from "../enums/CardRank";
import CardSuit from "../enums/CardSuit";

export interface TienLenCard {
  suit: CardSuit;
  rank: CardRank;
  value: number;
}
