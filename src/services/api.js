//запросы, связанные с запросами на сервер
import { BURGER_API_URL } from "../utils/consts"

export const fetchOrderRequest = async (data) => {
    return await fetch(`${BURGER_API_URL}/orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             },
            body: JSON.stringify(data),
          })
}