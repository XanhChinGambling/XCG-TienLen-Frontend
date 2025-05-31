export default interface TLNATRoomMetadataDto {
  roomId: number;
  ownerId: string;
  bet: number;
  isPlaying: boolean;

  players: number;
  spectates: number;
}
