import { loginRequest } from "./api";

export const loginUser = async (data) => {
    return await loginRequest(data)
    .then((res) => res.json())
}