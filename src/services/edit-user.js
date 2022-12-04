import { editUserRequest } from "./api";

export const editUser = async () => {
    return await editUserRequest()
    .then((res) => res.json())
}