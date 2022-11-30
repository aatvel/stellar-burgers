import { passwordRestoreRequest } from "./api";

export const passwordRestore = async (data) => {
    return await passwordRestoreRequest(data)
    .then((res) => res.json())
}