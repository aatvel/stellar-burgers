import { refreshTokenRequest } from "./api";

export const refreshToken = async (data) => {
    return await refreshTokenRequest(data)
    .then((res) => res.json())
}