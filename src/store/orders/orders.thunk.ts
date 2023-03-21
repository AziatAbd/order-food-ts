import { createAsyncThunk } from '@reduxjs/toolkit'
import orderService from '../../api/orderService'

export const getAllOrder = createAsyncThunk(
    'order/getAllOrder',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await orderService.getAllOrder()
            console.log(data.data)

            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
