import BackendWebClient from "@/lib/AxiosInstance";
import TLNATRoomMetadataDto from "../../type/dto/TLNATRoomMetadataDto";
import TienLenBet from "../../type/enums/TienLenBet";

export const CallFetchTLNATRooms = async (betRange: TienLenBet): Promise<TLNATRoomMetadataDto[]> => {
  const res = await BackendWebClient.get<TLNATRoomMetadataDto[]>("/api/v1/tienlen/nhat-an-tat/fetch", {
    params: {
      betRange,
    },
  });

  return res.data;
};

export const CallJoinTLNATRoom = async (bet: number): Promise<number> => {
  const res = await BackendWebClient.get<number>("/api/v1/tienlen/nhat-an-tat/join", {
    params: {
      bet,
    },
  });

  return res.data;
};