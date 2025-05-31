import BackendWebClient from "@/lib/AxiosInstance";
import TLNATRoomMetadataDto from "../../type/dto/TLNATRoomMetadataDto";
import TienLenBet from "../../type/enums/TienLenBet";

export const CallFetchRooms = async (
  bet: TienLenBet
): Promise<TLNATRoomMetadataDto[]> => {
  const res = await BackendWebClient.get<TLNATRoomMetadataDto[]>("/api/v1/user/rooms", {
    params: { bet },
    withCredentials: true,
  });

  return res.data;
};
