import { passwordResetRequest } from "./api";

export const passwordReset = async (data) => {
    return await passwordResetRequest(data)
    .then((res) => res.json())
}