import BackendWebClient from "@/lib/AxiosInstance";
import LoginChallengeResponse from "@/query/v1/adto/LoginChallengeReponse";

export const CallChallenge = async (): Promise<LoginChallengeResponse> => {
  const res = await BackendWebClient.get<LoginChallengeResponse>(
    "/api/v1/auth/challenge"
  );

  return res.data;
};

export const CallLogin = async (params: {
  code: string;
  state: string;
  redirectUri?: string;
}): Promise<string> => {
  const res = await BackendWebClient.post<string>("/api/v1/auth/login", null, {
    params: {
      code: params.code,
      state: params.state,
      redirectUri: params.redirectUri,
    },
  });

  return res.data;
};


export const CallRefreshToken = async (): Promise<string> => {
  const res = await BackendWebClient.post<string>("/api/v1/auth/refresh", null, {
    withCredentials: true,
  });

  return res.data;
};

export const CallLogout = async (): Promise<void> => {
  await BackendWebClient.delete("/api/v1/auth/logout", {
    withCredentials: true,
  });
};
