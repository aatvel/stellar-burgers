import { getUserRequest } from "./api";

export const getUser = async () => {
    return await getUserRequest()
    .then((res) => res.json())
}