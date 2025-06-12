import UserAccountDto from "../dto/UserAccountDto";

export default interface TLNATRoomPlayerUpdateResponse {
  players: UserAccountDto[];
  spectates: UserAccountDto[];
}
