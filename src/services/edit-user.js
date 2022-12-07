import { editUserRequest } from "./api";

export const editUser = async (form) => {
    return await editUserRequest(form)
    .then((res) => res.json())
}