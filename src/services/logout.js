import { logoutUserRequest } from "./api";

export const logoutUser = async (data) => {
    return await logoutUserRequest(data)
    .then((res) => res.json())
}