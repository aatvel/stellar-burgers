import { updateUserRequest } from "./api";

export const updateUser = async (data) => {
    return await updateUserRequest(data)
    .then((res) => res.json())
}