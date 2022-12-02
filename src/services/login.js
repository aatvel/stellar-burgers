import { loginUserRequest } from "./api";

export const loginUser = async (data) => {
    return await loginUserRequest(data)
    .then((res) => res.json())
}