import { axiosInstance } from '../config/axiosInstance'

const getBasket = () => {
    return axiosInstance.get('basket')
}

const addToBasket = (newItem) => {
    return axiosInstance.post(`foods/${newItem.id}/addToBasket`, {
        amount: newItem.amount,
    })
}

const updateBasketItem = (id, basketAmount) => {
    return axiosInstance.put(`basket/${id}/update`, {
        amount: basketAmount,
    })
}

const deleteBasketItem = (id) => {
    return axiosInstance.delete(`basket/${id}/delete`)
}

export default { getBasket, addToBasket, updateBasketItem, deleteBasketItem }
