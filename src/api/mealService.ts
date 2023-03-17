import { Meal } from '../common/types'
import { axiosInstance } from '../config/axiosInstance'

type AllMealsResponse = {
    data: Meal[]
}
const getAllMeals = () => {
    return axiosInstance.get<AllMealsResponse>('foods')
}

export default { getAllMeals }
