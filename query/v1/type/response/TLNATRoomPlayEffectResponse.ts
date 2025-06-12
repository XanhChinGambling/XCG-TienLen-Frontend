import { TienLenCard } from "../data/TienLenCard";
import TienLenEffect from "../enums/TienLenEffect";

export default interface TLNATRoomPlayEffectResponse {
  playerId: string;
  effect: TienLenEffect;
  cards: TienLenCard[];
}
