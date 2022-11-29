import { fetchOrderRequest } from "./api";

export const fetchOrder = async (data) => {
    return await fetchOrderRequest(data)
    .then((res) => res.json())
}