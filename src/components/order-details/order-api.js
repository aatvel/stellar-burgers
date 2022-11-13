const urlOrder = 'https://norma.nomoreparties.space/api/orders'

function checkResult(res) {
    if(res.ok) { 
        return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`)
}

export function getOrderNumber(idArr, setState) {
    return fetch(urlOrder, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ingredients: idArr
        })
    })
        .then(res => checkResult(res))
        .then(res => setState(res.order.number))
}