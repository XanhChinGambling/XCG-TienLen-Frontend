import TienLenWinning from "../enums/TienLenWinning";

export default interface TLNATRoomGameWinningResponse {
  playerId: string;
  gameResult: Record<string, number>;
  winningType: TienLenWinning;
}
