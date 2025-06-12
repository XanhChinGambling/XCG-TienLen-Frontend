import BackendWebClient from "@/lib/AxiosInstance";
import UserAccountDto from "@/query/v1/type/dto/UserAccountDto";
import UserTienLenInfoDto from "@/query/v1/type/dto/UserTienLenInfoDto";

export const CallFetchCurrentUserInfo = async (): Promise<UserAccountDto> => {
  const res = await BackendWebClient.get<UserAccountDto>("/api/v1/user/@me/all");
  return res.data;
};

export const CallFetchCurrentUserTienLenInfo = async (): Promise<UserTienLenInfoDto> => {
  const res = await BackendWebClient.get<UserTienLenInfoDto>("/api/v1/user/@me/tienlen");
  return res.data;
};
