import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import mealService from '../../api/mealService'

export const getAllMeals = createAsyncThunk(
    'meal/getAll',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await mealService.getAllMeals()
            return data.data
        } catch (e) {
            if (isAxiosError(e)) {
                const error = e as AxiosError<{
                    status: number
                    message: string
                }>
                return rejectWithValue(error.response?.data.message)
            }
            return rejectWithValue('Something went wrong')
        }
    }
)
