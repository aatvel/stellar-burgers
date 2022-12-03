import { logoutUserRequest } from "./api";

export const logoutUser = async (refreshToken) => {
    return await logoutUserRequest(refreshToken)
    .then((res) => res.json())
}