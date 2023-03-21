import { Order } from '../common/types'
import { axiosInstance } from '../config/axiosInstance'

type AllOrdersResponse = {
    data: Order[]
}

const getAllOrder = () => {
    return axiosInstance.get<AllOrdersResponse>('orders/all')
}

export default { getAllOrder }
