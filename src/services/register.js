import { registerRequest } from "./api";

export const registerUser = async (data) => {
    return await registerRequest(data)
    .then((res) => res.json())
}